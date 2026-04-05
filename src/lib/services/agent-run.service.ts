import { BaseService } from "./base.service";
import { AgentRunSchemaType, agentRunSchema } from "../validators";

export class AgentRunService extends BaseService<AgentRunSchemaType> {
  constructor() {
    super("agent_runs", agentRunSchema);
  }

  async getRecentAgentRuns(userId: string, limit: number = 5): Promise<AgentRunSchemaType[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();
    return snapshot.docs.map((doc) => doc.data() as AgentRunSchemaType);
  }
}

export const agentRunService = new AgentRunService();
