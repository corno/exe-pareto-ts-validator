// #!/usr/bin/env node
// import * as pb from "pareto-core-exe"
// import * as pf from "pareto-filesystem-res"
// import * as gta from "generate-typesafe-ast"
// import { _dataGrammar } from "../../data/dataGrammar"
// import { _creatorGrammar } from "../../data/creatorGrammar"
// import { _procedureGrammar } from "../../data/procedureGrammar"
// import { _interfaceGrammar } from "../../data/interfaceGrammar"
// import { _typeGrammar } from "../../data/typeGrammar"
// import * as fp from "fountain-pen"
// import * as pl from "pareto-core-lib"
// pb.runProgram(
//     ($) => {
//         const targetDirPath = $.argument

//         if (targetDirPath === undefined) {
//             //pb.logError("missing target directory path")
//             pb.processExit(1)
//         }

//         pf.wrapDirectory(
//             {
//                 rootDirectory: targetDirPath,
//             },
//             {
//                 callback: ($i) => {
//                     const dir = $i

//                     fp.createContext(
//                         //!!!!!!!!!!
//                         (str) => str,
//                     ).configure(
//                         {
//                             newline: "\r\n",
//                             indentation: "    ",
//                             trimLines: true,
//                         },
//                         ($i) => {
//                             const cc = $i
//                             function g(
//                                 grammar: gta.TGrammar,
//                                 dirName: string,
//                             ) {
//                                 gta.generateCode(
//                                     {
//                                         grammar: grammar,
//                                     },
//                                     {
//                                         createWriteStream: ($, $i) => {
//                                             const ws = $i
//                                             dir.createWriteStream(
//                                                 {
//                                                     path: [dirName, $.path].join(""),
//                                                     createMissingDirectories: true,
//                                                 },
//                                                 {
//                                                     consumer: ($i) => {
//                                                         cc.processBlock(
//                                                             {
//                                                                 onBlock: ($) => {
//                                                                     ws($)
//                                                                 },
//                                                                 consumer: $i,
//                                                             }
//                                                         )
//                                                     }
//                                                 }
//                                             )
//                                         },
//                                         onError: ($) => {
//                                             console.error($)
//                                         }
//                                     }
//                                 )
//                             }
//                             g(_dataGrammar, "dataGrammar")
//                             g(_interfaceGrammar, "interfaceGrammar")
//                             g(_typeGrammar, "paretoGrammar")
//                             g(_creatorGrammar, "creatorGrammar")
//                             g(_procedureGrammar, "procedureGrammar")

//                         }
//                     )
//                 },
//                 onError: ($) => {
//                     pl.logDebugMessage(pf.createFSErrorMessage($))
//                 },
//                 onEnd: () => {
//                     //
//                 },
//             }
//         )

//     }
// )
