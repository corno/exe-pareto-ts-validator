#!/usr/bin/env node
import * as pt from 'pareto-core-types'
// import * as pl from 'pareto-core-lib'
// import * as pe from 'pareto-core-exe'

// import * as process from "res-pareto-process"
// import * as str from "res-pareto-string"
// import * as path from "res-pareto-path"
// import * as ap from "lib-analyse-path"
// import * as exe from "lib-pareto-exe"
// import * as fs from "res-pareto-filesystem"
// // import * as asstring from "res-pareto-asstring"

// import { git_createErrorMessage, git_ls_files } from "../implementation"
// import { _paretoProject } from "../data/paretoProject.data"

// pe.runProgram(($) => {
//     exe.p_getSingleArgument(
//         $.arguments,
//         {
//             callback: ($) => {

//                 function recurse(path: pt.Nested<string>) {
//                     fs.f_readDirectory({
//                         path: path
//                     })._execute(($) => {
//                         switch ($[0]) {
//                             case "error":
//                                 pl.cc($[1], ($) => {

//                                 })
//                                 break
//                             case "success":
//                                 pl.cc($[1], ($) => {

//                                 })
//                                 break
//                             default: pl.au($[0])
//                         }
//                     })
//                 }
//                 recurse
//                 git_ls_files(
//                     $,
//                     {
//                         onError: ($) => {
//                             pl.logDebugMessage(git_createErrorMessage($))
//                         }
//                     },
//                     {
//                         process: process.f_call,
//                         trimEnd: str.f_trimEnd,
//                         splitString: str.f_splitString,
//                     })._execute(($) => {
//                         $.forEach(($) => {
//                             // pl.logDebugMessage(`>${$}`)
//                             const x = path.f_parseFilePath({
//                                 filePath: $,
//                                 pathSeparator: "/"
//                             })
//                             //pl.logDebugMessage(x.baseName)
//                             const res = ap.f_analysePath({
//                                 definition: _paretoProject,
//                                 filePath: x,
//                             })
//                             switch (res[0]) {
//                                 case "error":
//                                     pl.cc(res[1], ($) => {
//                                         pl.logDebugMessage(`${ap.f_createPathErrorMessage($.error)}: ${$.path.reduce("", (current, $) => `${current}/${$}`)}`)
//                                     })
//                                     break
//                                 case "success":
//                                     pl.cc(res[1], ($) => {

//                                         //  pl.logDebugMessage($.pattern.reduce("", (current, $) => `${current}**${$}`))
//                                     })
//                                     break
//                                 default: pl.au(res[0])
//                             }
//                         })
//                     })

//             },
//             error: ($) => {
//                 function x(): string {
//                     switch ($[0]) {
//                         case "no arguments found":
//                             return pl.cc($[1], ($) => {
//                                 return `no arguments found`
//                             })
//                         case "too many arguments found":
//                             return pl.cc($[1], ($) => {
//                                 return `too many arguments found`

//                             })
//                         default: return pl.au($[0])
//                     }

//                 }
//                 pl.logDebugMessage(x())
//             }
//         }
//     )
// })
