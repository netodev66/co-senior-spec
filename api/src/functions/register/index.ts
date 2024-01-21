import schema from "./schema";
import { handlerPath } from "src/commons/libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "user/register",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
