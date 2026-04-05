import { BaseService } from "./base.service";
import { MemorySchemaType, memorySchema } from "../validators";

export class MemoryService extends BaseService<MemorySchemaType> {
  constructor() {
    super("memories", memorySchema);
  }
}

export const memoryService = new MemoryService();
