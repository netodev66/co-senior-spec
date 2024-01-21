import { model, Schema } from "dynamoose";
import { SchemaDefinition } from "dynamoose/dist/Schema";
import { IProduct } from "src/entities/models/Product";
import { v4 as uuidV4 } from "uuid";

const schema: Record<keyof IProduct, SchemaDefinition["AttributeDefinition"]> =
  {
    id: {
      type: String,
      default: uuidV4,
      required: true,
      hashKey: true,
    },
    product_asset: {
      type: String,
      required: true,
    },
    product_name: {
      required: true,
      type: String,
    },
    product_price: {
      required: true,
      type: Number,
    },
  };

export const ProductSchema = new Schema(schema);
export const ProductModel = model("products", ProductSchema);

export default ProductSchema;
