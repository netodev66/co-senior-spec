import type { AWS } from "@serverless/typescript";

import * as functions from "@functions/index";
import * as authorizers from "src/authorizers";

const serverlessConfiguration: AWS = {
  service: "api",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-api-gateway-caching",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: { ...functions, ...authorizers },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    apiGatewayCaching: {
      enabled: true,
    },
  },
};

module.exports = serverlessConfiguration;
