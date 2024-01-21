import { BaseException } from "./base.execption";

export class UserNotExist extends BaseException {
  constructor() {
    super(404, "User Not exist");
  }
}
