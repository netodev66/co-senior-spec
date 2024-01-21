import { BaseException } from "./base.execption";

export class InvalidPayloadformat extends BaseException {
  constructor(message = "Unable to process request") {
    super(400, message);
  }
}
