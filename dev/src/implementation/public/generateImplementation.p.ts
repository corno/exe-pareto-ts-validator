import * as pl from "pareto-core-lib"
// import * as pm from "pareto-core-state"


// import * as main from "api-pareto-main"

// import * as gta from "exe-generate-typesafe-ast"
// import { DDependencies } from "../../interface"

// export function generateImplementation(
//     $: {
//         grammar: gta.TGrammar,
//         arguments: main.Arguments,
//     },
//     $d: DDependencies
// ): void {
//     const conf = $
//     const deps = $d
//     const argStack = pm.createStack($.arguments)

//     argStack.pop(
//         (first) => {

//             argStack.pop(
//                 (second) => {
//                     const rootPath = first

//                     gta.generateImplementation(
//                         {
//                             grammar: conf.grammar,
//                             rootPath: rootPath,
//                             pathToInterface: second,
//                         },
//                         {
//                             isYinBeforeYang: deps.isYinBeforeYang,
//                             createWriteStream: deps.createWriteStream,
//                             startAsync: $d.startAsync,
//                         }
//                     )
//                 },
//                 () => {
//                     pl.panic("args")
//                 }
//             )
//         },
//         () => {
//             pl.panic("args")
//         }
//     )
// }
