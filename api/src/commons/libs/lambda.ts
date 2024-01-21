import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import httpSecurityHeaders from "@middy/http-security-headers";

export const middyfy = (handler) => {
  return middy(handler).use(httpSecurityHeaders()).use(middyJsonBodyParser());
};
