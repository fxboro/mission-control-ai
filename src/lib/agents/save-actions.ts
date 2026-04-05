// ─────────────────────────────────────────────────────────────
// Save Actions Mapper — Mission Control AI
// Converts validated workflow outputs into concrete SaveAction
// objects that the frontend can present as one-click persist buttons.
// ─────────────────────────────────────────────────────────────

import type {
  V1WorkflowId,
  SaveAction,
  IdeaToMvpOutput,
  MvpToTechnicalPlanOutput,
  FeatureToBuildPlanOutput,
  LeadToProposalOutput,
  WeeklyReviewOutput,
  WorkflowOutput,
} from "./types";

/**
 * Takes a validated workflow output and produces an array of
 * SaveAction objects — each representing a concrete Firestore
 * write the user can trigger from the UI.
 */
export function mapSaveActions(
  workflowId: V1WorkflowId,
  output: WorkflowOutput,
  projectId?: string,
  leadId?: string
): SaveAction[] {
  const mappers: Record<V1WorkflowId, () => SaveAction[]> = {
    idea_to_mvp: () => mapIdeaToMvpActions(output as IdeaToMvpOutput),
    mvp_to_technical_plan: () => mapMvpToTechnicalPlanActions(output as MvpToTechnicalPlanOutput, projectId),
    feature_to_build_plan: () => mapFeatureToBuildPlanActions(output as FeatureToBuildPlanOutput, projectId),
    lead_to_proposal: () => mapLeadToProposalActions(output as LeadToProposalOutput, leadId),
    weekly_review: () => mapWeeklyReviewActions(output as WeeklyReviewOutput),
  };

  return mappers[workflowId]();
}

// ── Per-Workflow Mappers ─────────────────────────────────────

function mapIdeaToMvpActions(output: IdeaToMvpOutput): SaveAction[] {
  const actions: SaveAction[] = [];

  // Action 1: Create a new project from the MVP scope
  actions.push({
    key: "create_project",
    label: "Create Project",
    collection: "projects",
    payload: {
      name: output.projectName,
      type: "product",
      status: "active",
      summary: output.mvpScope,
      targetUser: output.targetUser,
      problem: output.problemStatement,
      phase: "spec",
      stack: output.suggestedStack,
      currentFocus: output.nextSteps[0] ?? "Define MVP scope",
      risk: output.risks.length > 3 ? "high" : output.risks.length > 1 ? "medium" : "low",
    },
  });

  // Action 2: Create starter tasks from nextSteps
  output.nextSteps.forEach((step, i) => {
    actions.push({
      key: `create_task_${i}`,
      label: `Create Task: ${step.slice(0, 50)}`,
      collection: "tasks",
      payload: {
        title: step,
        type: "feature",
        priority: i === 0 ? "high" : "medium",
        status: "todo",
      },
    });
  });

  return actions;
}

function mapMvpToTechnicalPlanActions(output: MvpToTechnicalPlanOutput, projectId?: string): SaveAction[] {
  const actions: SaveAction[] = [];

  // Action 1: Save architecture decisions
  output.techDecisions.forEach((td, i) => {
    actions.push({
      key: `save_decision_${i}`,
      label: `Save Decision: ${td.decision.slice(0, 50)}`,
      collection: "decisions",
      payload: {
        title: td.decision,
        projectId,
        context: `Architecture planning for technical plan`,
        optionsConsidered: td.alternatives,
        chosenOption: td.decision,
        rationale: td.rationale,
      },
    });
  });

  // Action 2: Create implementation tasks
  output.implementationOrder.forEach((step, i) => {
    actions.push({
      key: `create_impl_task_${i}`,
      label: `Create Task: ${step.slice(0, 50)}`,
      collection: "tasks",
      payload: {
        title: step,
        projectId,
        type: "feature",
        priority: i < 2 ? "high" : "medium",
        status: "todo",
      },
    });
  });

  return actions;
}

function mapFeatureToBuildPlanActions(output: FeatureToBuildPlanOutput, projectId?: string): SaveAction[] {
  const actions: SaveAction[] = [];

  // Create a task for each item in the build plan
  output.tasks.forEach((task, i) => {
    actions.push({
      key: `create_task_${i}`,
      label: `Create Task: ${task.title.slice(0, 50)}`,
      collection: "tasks",
      payload: {
        title: task.title,
        description: task.description,
        projectId,
        type: task.type,
        priority: task.priority,
        estimateHours: task.estimateHours,
        status: "todo",
      },
    });
  });

  return actions;
}

function mapLeadToProposalActions(output: LeadToProposalOutput, leadId?: string): SaveAction[] {
  return [
    {
      key: "create_proposal",
      label: "Save Proposal Draft",
      collection: "proposals",
      payload: {
        leadId: leadId ?? "",
        title: output.proposalTitle,
        status: "draft",
        problemSummary: output.problemSummary,
        scope: output.scope,
        deliverables: output.deliverables,
        timeline: output.timeline,
        pricing: output.pricing,
        assumptions: output.assumptions,
        risks: output.risks,
      },
    },
  ];
}

function mapWeeklyReviewActions(output: WeeklyReviewOutput): SaveAction[] {
  const actions: SaveAction[] = [];

  // Create goals for next week
  output.suggestedGoals.forEach((goal, i) => {
    actions.push({
      key: `create_goal_${i}`,
      label: `Create Goal: ${goal.slice(0, 50)}`,
      collection: "goals",
      payload: {
        title: goal,
        type: "weekly",
        status: "active",
        progress: 0,
      },
    });
  });

  // Save learnings as memories
  output.learnings.forEach((learning, i) => {
    actions.push({
      key: `save_learning_${i}`,
      label: `Save Learning: ${learning.slice(0, 50)}`,
      collection: "memories",
      payload: {
        type: "learning",
        content: learning,
        confidence: 80,
        tags: ["weekly_review"],
      },
    });
  });

  return actions;
}
