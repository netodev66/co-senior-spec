import { model, Schema } from "dynamoose";
import { SchemaDefinition } from "dynamoose/dist/Schema";
import { IUser } from "src/entities/models/User";
import { v4 as uuidV4 } from "uuid";

const schema: Record<keyof IUser, SchemaDefinition["AttributeDefinition"]> = {
  id: {
    type: String,
    default: uuidV4,
    required: true,
  },
  username: {
    type: String,
    required: true,
    hashKey: true,
  },
  password: {
    required: true,
    type: String,
  },
};

export const UserSchema = new Schema(schema);
export const UserModel = model("user", UserSchema);

export default UserSchema;
