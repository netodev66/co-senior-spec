import { BaseException } from "./base.execption";

export class IncorrectUserNameOrPassException extends BaseException {
  constructor() {
    super(400, "incorrect Username or password");
  }
}
