import { BaseService } from "./base.service";
import { PlaybookSchemaType, playbookSchema } from "../validators";

export class PlaybookService extends BaseService<PlaybookSchemaType> {
  constructor() {
    super("playbooks", playbookSchema);
  }
}

export const playbookService = new PlaybookService();
