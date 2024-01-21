export { handler as jwtAuthorizer } from "./handler";
import { handlerPath } from "src/commons/libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
};
