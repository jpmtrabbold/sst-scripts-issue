import { ApiStack } from './ApiStack'
import * as sst from 'sst/constructs'


export function ScriptsStack({ stack }: sst.StackContext) {
   //sst.dependsOn(ApiStack)
   
   const migrationScript = new sst.Script(stack, "migrationsScript", {
      onCreate: 'packages/functions/src/script.handler',
      onUpdate: 'packages/functions/src/script2.handler',
   })
   
   migrationScript.attachPermissions(['lambda'])
   
   return { migrationScript }
}
