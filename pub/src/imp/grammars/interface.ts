
// import * as pr from "pareto-core-lib"
// import * as interfaceParser from "../../generated/interfaceGrammar"
// import { _typescriptFileStructure } from "../../data/paretoProject"
// import { doAT, Handle, OnError } from "../handle"
// import { TAnnotatedString } from "../../generated/paretoGrammar"

// export function doInterface<Annotation>(
//     handle: Handle<Annotation, interfaceParser.TNroot<Annotation>>,
//     onError: OnError<Annotation>,
// ): () => void {
//     return () => {
//         handle(
//             interfaceParser.parse,
//             ($) => {
//                 doAT($, ($) => {
//                     $.imports.forEach(($) => {
//                         doAT($, ($) => {
//                             doAT($.clause, ($) => {
//                                 switch ($[0]) {
//                                     case "named":
//                                         pr.cc($[1], ($) => {
//                                         })
//                                         break
//                                     case "namespace":
//                                         pr.cc($[1], ($) => {
//                                             // if ($.content.content !== "pr") {
//                                             //     onError($.content.annotation, `expected 'pr'`)
//                                             // }
//                                         })
//                                         break
//                                     default:
//                                         pr.au($[0])
//                                 }
//                             })
//                         })
//                     })
//                     $.interfaces.forEach(($) => {
//                         pr.logDebugMessage("!!!!!!!!!!!")
//                         doAT($, ($) => {
//                             function startsWith(
//                                 $: {
//                                     string: TAnnotatedString<Annotation>,
//                                     expected: string
//                                 }
//                             ): void {
//                                 if (!$.string.value.startsWith($.expected)) {
//                                     onError($.string.annotation, `invalid name`, `must start wih '${$.expected}'`)
//                                 }
//                             }
//                             startsWith(
//                                 {
//                                     string: $.name,
//                                     expected: `I`,
//                                 },
//                             )
//                         })
//                     })
//                 })
//             },
//         )
//     }
// }