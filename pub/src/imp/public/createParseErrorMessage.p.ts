import * as pl from "pareto-core-lib"

// import { TParseError } from "../private/processTypescriptProject"

// import * as ap from "lib-analyse-path"

// export function createParseErrorMessage($: TParseError): string {

//     switch ($[0]) {
//         case "dynamic parser":
//             return pl.cc($[1], ($) => {
//                 switch ($[0]) {
//                     case "tsconfg.json does not exist":
//                         return pl.cc($[1], ($) => {
//                             return "tsconfig.json does not exist"
//                         })
//                     default: return pl.au($[0])
//                 }
//             })
//         case "file path":
//             return pl.cc($[1], ($) => {
//                 return `${p2.joinNestedStrings($.path, "/")}: ${ap.createAnnotatedPathErrorMessage($.error)}`
//             })
//         case "missing token":
//             return pl.cc($[1], ($) => {
//                 return "MT"

//             })
//         case "pattern":
//             return pl.cc($[1], ($) => {
//                 return "P"

//             })
//         case "upcycle":
//             return pl.cc($[1], ($) => {
//                 const location = $.annotation === null
//                     ? ""
//                     : `:${$.annotation.location.line}:${$.annotation.location.column}`
//                 return `${p2.joinNestedStrings($.path, "/")}${location}  ${$.message} `
//             })
//         case "unexpected token":
//             return pl.cc($[1], ($) => {
//                 //return "UT"
//                 return `${$.file.absolutePath}:${$.token.details.location.line}:${$.token.details.location.column}: unexpected token '${$.token.kindName}', expected: ${$.expected}`
//             })
//         default: return pl.au($[0])
//     }
// }
