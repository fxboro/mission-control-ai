// ─────────────────────────────────────────────────────────────
// Context Builder — Mission Control AI
// Assembles the full AgentContext for a workflow run by
// loading relevant data from Firestore services.
// ─────────────────────────────────────────────────────────────

import type { V1WorkflowId } from "./types";
import type { AgentContext } from "./types";
import type { RunAgentWorkflowRequest } from "@/lib/validators";
import { loadMemories } from "./memory-loader";
import { loadProjectContext } from "./project-context-loader";
import { goalService } from "@/lib/services/goal.service";
import { leadService } from "@/lib/services/lead.service";
import { getWorkflowDefinition } from "./workflow-registry";

export interface ContextBuilderParams {
  userId: string;
  request: RunAgentWorkflowRequest;
  workflowId: V1WorkflowId;
}

/**
 * Builds the complete AgentContext for a given workflow run.
 * Loads memories, project data, goals, and lead data in parallel
 * based on what the workflow actually needs.
 */
export async function buildAgentContext(params: ContextBuilderParams): Promise<AgentContext> {
  const { userId, request, workflowId } = params;
  const definition = getWorkflowDefinition(workflowId);

  // Determine what to load based on workflow needs
  const needsProject = !!request.projectId;
  const needsLead = !!request.leadId || definition.agentRole === "freelance";
  const contextTags = request.contextTags ?? [];

  // Load everything in parallel for speed
  const [memories, projectCtx, goals, lead] = await Promise.all([
    loadMemories(userId, contextTags),
    needsProject && request.projectId
      ? loadProjectContext(request.projectId)
      : Promise.resolve({ project: null, tasks: [] }),
    goalService.listByUser(userId),
    needsLead && request.leadId
      ? leadService.getById(request.leadId)
      : Promise.resolve(null),
  ]);

  return {
    inputGoal: request.inputGoal,
    memories,
    project: projectCtx.project,
    goals,
    tasks: projectCtx.tasks,
    lead,
    additionalContext: request.context,
    contextTags,
  };
}
