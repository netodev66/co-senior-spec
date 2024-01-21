import { handlerPath } from "src/commons/libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "products",
        authorizer: {
          name: "jwtAuthorizer",
          identitySource: "method.request.header.Authorization",
          resultTtlInSeconds: 30,
          type: "token",
        },
        caching: {
          enabled: true,
          ttlInSeconds: 3600, // # overrides the global setting for ttlInSeconds
          dataEncrypted: true, // # default is false
        },
      },
    },
  ],
};
