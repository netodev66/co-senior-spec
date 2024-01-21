import { BaseException } from "./base.execption";

export class EntityNotFoundException extends BaseException {
  constructor() {
    super(404, "Model not found.");
  }
}
