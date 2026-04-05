import { BaseService } from "./base.service";
import { ProjectSchemaType, projectSchema } from "../validators";

export class ProjectService extends BaseService<ProjectSchemaType> {
  constructor() {
    super("projects", projectSchema);
  }

  async getActiveProjects(userId: string): Promise<ProjectSchemaType[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .where("status", "==", "active")
      .orderBy("updatedAt", "desc")
      .get();
    return snapshot.docs.map((doc) => doc.data() as ProjectSchemaType);
  }
}

export const projectService = new ProjectService();
