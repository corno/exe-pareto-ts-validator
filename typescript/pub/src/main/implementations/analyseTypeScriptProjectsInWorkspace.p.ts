#!/usr/bin/env node

import * as pl from 'pareto-core-lib'

// import * as fs from "api-pareto-filesystem"

// import * as exeLib from "lib-pareto-exe"
// import * as main from "api-pareto-main"
// import * as collation from "api-pareto-collation"
// import * as uglyStuff from "api-pareto-ugly-stuff"
// import * as ap from "lib-analyse-path"



// import { parseTypescriptProjectsInProject } from "./processTypescriptProjectsInProject.p"
// import { createParseErrorMessage } from "./createParseErrorMessage.p"
// import { getType } from "../private/getType.p"



// import { DCleanupDependencies } from "../../modules/cleanup"
// import * as ts2pareto from "../../modules/ts2pareto"

// import * as api from "../../interface"
// import { DParseTypescriptProjectDependencies } from "../../interface/dependencies/dependencies.p"


// export function analyseTypeScriptProjectsInWorkspace(
//     $: {
//         arguments: main.TArguments
//         typescriptProject: ap.TDirectory
//     },
//     $d: {
//         x: {
//             parseDependencies: DParseTypescriptProjectDependencies
//             cleanupDependencies: DCleanupDependencies
//             ts2ParetoDependencies: DTS2ParetoDependencies
//             serialize: DSerializeTypeScriptSubset
//         },
//         substr: uglyStuff.FSubStr
//         readDirectory: fs.ReadDirectory
//         sortedForEach: collation.XSortedForEach
//     },
//     $s: pa.StartAsync,
// ): void {
//     const config = $
//     exeLib.getSingleArgument(
//         $.arguments,
//         {
//             error: () => {
//                 pl.panic("args")
//             },
//             callback: ($) => {
//                 const contextPath = $
//                 $s(
//                     pa.processValue(

//                         $d.readDirectory({
//                             path: contextPath
//                         }),
//                         ($) => {
//                             switch ($[0]) {
//                                 case "error":
//                                     pl.cc($[1], ($) => {
//                                         pl.logDebugMessage("READ DIR ERROR")
//                                     })
//                                     break
//                                 case "success":
//                                     pl.cc($[1], ($) => {
//                                         $d.sortedForEach($, ($, key) => {

//                                             parseTypescriptProjectsInProject(
//                                                 {
//                                                     typescriptProject: config.typescriptProject,
//                                                     projectName: key,
//                                                     contextDirectory: contextPath,
//                                                     type: getType(
//                                                         key,
//                                                         {
//                                                             first3Characters: ($) => $d.substr({
//                                                                 value: $,
//                                                                 begin: 0,
//                                                                 length: 3,
//                                                             })
//                                                         }
//                                                     ),
//                                                     //path: $.path,
//                                                 },
//                                                 {
//                                                     onError: ($) => {
//                                                         //pl.logDebugMessage(`???? ${contextPath} ${key}`)

//                                                         pl.logDebugMessage(createParseErrorMessage($))
//                                                     }
//                                                 },
//                                                 $d.x,

//                                                 $s,
//                                             )
//                                         })
//                                     })
//                                     break
//                                 default: pl.au($[0])
//                             }
//                         }
//                     )
//                 )

//             }
//         }
//     )
// }