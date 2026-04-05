// ─────────────────────────────────────────────────────────────
// Project Context Loader — Mission Control AI
// Loads a project and its related tasks for context injection.
// ─────────────────────────────────────────────────────────────

import type { ProjectSchemaType, TaskSchemaType } from "@/lib/validators";
import { projectService } from "@/lib/services/project.service";
import { taskService } from "@/lib/services/task.service";

export interface ProjectContext {
  project: ProjectSchemaType | null;
  tasks: TaskSchemaType[];
}

/**
 * Loads a project and its tasks in parallel.
 * Returns null project + empty tasks if the project doesn't exist.
 */
export async function loadProjectContext(projectId: string): Promise<ProjectContext> {
  const [project, tasks] = await Promise.all([
    projectService.getById(projectId),
    taskService.getProjectTasks(projectId),
  ]);

  return { project, tasks };
}
