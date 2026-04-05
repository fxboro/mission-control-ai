import { BaseService } from "./base.service";
import { ProposalSchemaType, proposalSchema } from "../validators";

export class ProposalService extends BaseService<ProposalSchemaType> {
  constructor() {
    super("proposals", proposalSchema);
  }

  async getRecentProposals(userId: string, limit: number = 10): Promise<ProposalSchemaType[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .orderBy("updatedAt", "desc")
      .limit(limit)
      .get();
    return snapshot.docs.map((doc) => doc.data() as ProposalSchemaType);
  }
}

export const proposalService = new ProposalService();
