// ─────────────────────────────────────────────────────────────
// Workflow Registry — Mission Control AI
// Maps V1 workflow IDs to their metadata, agent role, and
// corresponding WorkflowType enum value for persistence.
// ─────────────────────────────────────────────────────────────

import type { WorkflowDefinition, V1WorkflowId } from "./types";

export const WORKFLOW_REGISTRY: Record<V1WorkflowId, WorkflowDefinition> = {
  idea_to_mvp: {
    id: "idea_to_mvp",
    agentRole: "founder",
    workflowType: "scope_mvp",
    label: "Idea → MVP Scope",
    description: "Take a raw product idea and scope it into a concrete MVP with features, stack, and timeline.",
  },
  mvp_to_technical_plan: {
    id: "mvp_to_technical_plan",
    agentRole: "architect",
    workflowType: "design_architecture",
    label: "MVP → Technical Plan",
    description: "Transform an MVP spec into a full technical architecture with components, data models, and API design.",
  },
  feature_to_build_plan: {
    id: "feature_to_build_plan",
    agentRole: "builder",
    workflowType: "sprint_plan",
    label: "Feature → Build Plan",
    description: "Break a feature down into prioritised, estimable tasks with acceptance criteria.",
  },
  lead_to_proposal: {
    id: "lead_to_proposal",
    agentRole: "freelance",
    workflowType: "proposal_draft",
    label: "Lead → Proposal",
    description: "Generate a professional client proposal from lead context, pain points, and budget signals.",
  },
  weekly_review: {
    id: "weekly_review",
    agentRole: "execution",
    workflowType: "retrospective",
    label: "Weekly Review",
    description: "Summarise the past week, surface blockers, extract learnings, and plan priorities for next week.",
  },
};

export function getWorkflowDefinition(id: V1WorkflowId): WorkflowDefinition {
  const def = WORKFLOW_REGISTRY[id];
  if (!def) {
    throw new Error(`Unknown workflow: ${id}`);
  }
  return def;
}

export function isV1WorkflowId(value: string): value is V1WorkflowId {
  return value in WORKFLOW_REGISTRY;
}
