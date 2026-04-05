import { BaseService } from "./base.service";
import { GoalSchemaType, goalSchema } from "../validators";

export class GoalService extends BaseService<GoalSchemaType> {
  constructor() {
    super("goals", goalSchema);
  }

  async getWeeklyGoals(userId: string, weekStr: string): Promise<GoalSchemaType[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .where("timeframe", "==", weekStr)
      .orderBy("updatedAt", "desc")
      .get();
    return snapshot.docs.map((doc) => doc.data() as GoalSchemaType);
  }
}

export const goalService = new GoalService();
