import { BaseService } from "./base.service";
import { DecisionSchemaType, decisionSchema } from "../validators";

export class DecisionService extends BaseService<DecisionSchemaType> {
  constructor() {
    super("decisions", decisionSchema);
  }

  async getRecentDecisions(userId: string, limit: number = 10): Promise<DecisionSchemaType[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();
    return snapshot.docs.map((doc) => doc.data() as DecisionSchemaType);
  }
}

export const decisionService = new DecisionService();
