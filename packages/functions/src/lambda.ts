import { ApiHandler } from "sst/node/api";
import { Time } from "@latest-sst/core/time";

export const handler = ApiHandler(async (_evt) => {
  console.log("*** helllo world 1 ***")
  console.log("*** helllo world 2 ***")
  console.log("*** helllo world 3 ***")
  console.log("*** helllo world 4 ***")
  return {
    body: `Hello world. The time is ${Time.now()} 2 `,
  };
});
