import { BaseService } from "./base.service";
import { LeadSchemaType, leadSchema } from "../validators";

export class LeadService extends BaseService<LeadSchemaType> {
  constructor() {
    super("leads", leadSchema);
  }

  async getOpenLeads(userId: string): Promise<LeadSchemaType[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .where("status", "in", ["new", "qualified", "proposal_sent"])
      .orderBy("updatedAt", "desc")
      .get();
    return snapshot.docs.map((doc) => doc.data() as LeadSchemaType);
  }
}

export const leadService = new LeadService();
