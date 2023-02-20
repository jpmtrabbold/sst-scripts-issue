import * as sst from 'sst/constructs'
import { ApiStack } from './ApiStack'


/**
 * This sets up the cron stack to run scheduled cron jobs
 * 
 * Cron expressions in AWS work as follows:
 * cron(Minutes Hours Day-of-month Month Day-of-week Year). Note the absense of seconds
 * One of the day-of-month or day-of-week values must be a question mark (?).
 * 
 * ref: https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents-expressions.html
 */
export function JobsStack({ stack }: sst.StackContext) {
   const api = sst.use(ApiStack)
   
   const migrationJob = new sst.Job(stack, "migrationsJob", {
      handler: "packages/functions/src/job.handler",
   })
   
   // so that the api can run this job
   api.bind([migrationJob])

   return { migrationJob }
}
