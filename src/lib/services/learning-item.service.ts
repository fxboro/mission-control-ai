import { BaseService } from "./base.service";
import { LearningItemSchemaType, learningItemSchema } from "../validators";

export class LearningItemService extends BaseService<LearningItemSchemaType> {
  constructor() {
    super("learning_items", learningItemSchema);
  }
}

export const learningItemService = new LearningItemService();
