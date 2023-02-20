import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { JobsStack } from "./stacks/JobsStack";
import { ScriptsStack } from "./stacks/ScriptsStack";

export default {
  config(_input) {
    return {
      name: "latest-sst",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {    
    app.stack(ApiStack).stack(ScriptsStack)
  },
} satisfies SSTConfig;
