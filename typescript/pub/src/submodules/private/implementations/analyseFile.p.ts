// //import * as pr from 'pareto-core-lib'
// import * as pf from "pareto-filesystem-api"
// import * as ap from "analyse-path"
// export function analyseFile(
//     $: {
//         filePath: string,
//         fileSystemStructure: ap.TDirectory,
//     },
//     $i: {
//         contextDir: pf.IDirectory,
//         onError: (message: string) => void
//         log: (message: string) => void
//     }
// ) {
//     const parsedPath = ap.parseFilePath($.filePath)
//     const res = ap.analysePath(
//         $.fileSystemStructure,
//         parsedPath,
//     )
//     if (res.error !== null) {
//         $i.onError(`${res.error}`)
//     }
//     $i.contextDir.readFile(
//         $.filePath,
//         {
//             callback:
//                 ($) => {
//                     $i.log(
//                         [
//                             // new Date().toISOString().split('T')[0],
//                             // contextPath,
//                             // filePath,
//                             res.pathPattern,
//                             res.error === null,
//                             parsedPath.directoryPath.join("/"),
//                             parsedPath.fileName,
//                             parsedPath.extension,
//                             (() => {
//                                 let lineCount = 1 //there's always 1 line
//                                 for (let i = 0; i !== $.length; i += 1) {
//                                     if ($[i] === "\n") {
//                                         lineCount += 1
//                                     }
//                                 }
//                                 return lineCount
//                             })(),
//                             // (filePath.indexOf(".generated") !== -1 || res.pathPattern === "/package-lock.json")
//                             //     ? "true"
//                             //     : "false",
//                         ].join(`,`)
//                     )
//                 }
//         }
//     )

// }