// import * as api from "../../interface"
// import * as uglyStuff from "res-pareto-ugly-stuff"
// import { TImportFile } from "../../interface"

// export const analyseImportFile: api.FAnalyseImportFile = ($): TImportFile => {

//     function startsWith($: string): boolean {
//         return uglyStuff.startsWIth({
//             contextString: $,
//             searchString: $
//         })
//     }

//     function lastPart($: string): string {
//         return uglyStuff.substr({
//             value: $,
//             begin: 4,
//             length: uglyStuff.stringLength($) - 4
//         })
//     }
//     switch ($) {
//         case "pareto-core-types":
//             return ["core", { type: ["types", {}] }]
//         case "pareto-core-candidates":
//             return ["core", { type: ["candidates", {}] }]
//         case "pareto-core-async":
//             return ["core", { type: ["async", {}] }]
//         case "pareto-core-raw":
//             return ["core", { type: ["raw", {}] }]
//         case "pareto-core-lib":
//             return ["core", { type: ["lib", {}] }]
//         case "pareto-core-resolve":
//             return ["core", { type: ["resolve", {}] }]
//         case "pareto-core-exe":
//             return ["core", { type: ["exe", {}] }]
//         case "pareto-core-state":
//             return ["core", { type: ["state", {}] }]
//         default:
//             if (startsWith("api-")) {
//                 return ["dependency", { type: ["api", {}], name: lastPart($) }]
//             } else {

//                 if (startsWith("lib-")) {
//                     return ["dependency", { type: ["library", {}], name: lastPart($) }]

//                 } else {

//                     if (startsWith("res-")) {
//                         return ["dependency", { type: ["resource", {}], name: lastPart($) }]
//                     } else {
//                         return ["local", { path: $ }]

//                         // if (startsWith(".")) {
//                         //     // $i({
//                         //     //     message: `IMPORT: ${$.file.strippedValue}`,
//                         //     //     annotation: ann,
//                         //     // })
//                         // } else {
//                         //     $i({
//                         //         message: `UNKNOWN IMPORT: ${$.file.strippedValue}`,
//                         //         annotation: ann,
//                         //     })
//                         // }
//                     }
//                 }
//             }
//     }
// }