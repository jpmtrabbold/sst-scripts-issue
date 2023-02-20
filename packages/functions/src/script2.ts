import { Job } from 'sst/node/job'

export const handler = async (event: any) => {
   const ret: any = {
      error: undefined,
      event,
   }

   console.log(`Starting migrationsScript`)
   try {
    console.log(`test ERROR 3333`)
      throw new Error('test ERROR 3333333333333333' )
   } catch (error: any) {
      const e = error as Error
      ret.error = e.toString()
      ret.errorCause = error.cause?.toString()
      ret.errorStack = e.stack
      console.log(`Error running migrationsScript: ${error}`)
   }

   console.log(`Finished migrationsScript`)
   return ret
}
