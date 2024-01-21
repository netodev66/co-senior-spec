import { BaseException } from "./base.execption";

export class PartitionKeyAlreadyExists extends BaseException {
  constructor() {
    super(422, "Resource already Exists in database");
  }
}
