import * as bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { ModelType } from "dynamoose/dist/General";
import { IUser } from "src/entities/models/User";
import { AnyItem } from "dynamoose/dist/Item";
import DynamoDBRepository from "./base.repository";

export class UserAdapter extends DynamoDBRepository<
  Pick<IUser, "id" | "username">,
  IUser
> {
  constructor(entity: ModelType<AnyItem>) {
    super(entity);
  }

  async hashUserPassword(password: string) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async create(inputs: Omit<IUser, "id">) {
    const payload: IUser = {
      ...inputs,
      id: uuid(),
    };
    if (inputs.password) {
      const hash = await this.hashUserPassword(inputs.password);
      payload.password = hash;
      Object.assign(payload, { password: hash });
    }
    return super.create(payload);
  }
}
