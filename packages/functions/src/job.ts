import { JobHandler } from "sst/node/job";

declare module "sst/node/job" {
  export interface JobTypes {
    myJob: {
      
    };
  }
}

export const handler = JobHandler("myJob", async (payload) => {
    console.log(`** JOB IS RUNNING **`);

    return {
        status: "job ran successfully ******"
    }
  });
  
  