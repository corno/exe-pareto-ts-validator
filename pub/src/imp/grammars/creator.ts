
// import * as pl from "pareto-core-lib"
// import * as creatorParser from "../../generated/creatorGrammar"
// import { _typescriptFileStructure } from "../../data/paretoProject"
// import { doAT, Handle, OnError } from "../handle"
// import { TAnnotatedString } from "../../generated/paretoGrammar"

// export function doCreator<Annotation>(
//     handle: Handle<Annotation, creatorParser.TNroot<Annotation>>,
//     onError: OnError<Annotation>,
// ): () => void {
//     return () => {
//         handle(
//             creatorParser.parse,
//             ($) => {
//                 doAT($, ($) => {
//                     $.imports.forEach(($) => {
//                         doAT($, ($) => {
//                             doAT($.clause, ($) => {
//                                 switch ($[0]) {
//                                     case "named":
//                                         pl.cc($[1], ($) => {
//                                         })
//                                         break
//                                     case "namespace":
//                                         pl.cc($[1], ($) => {
//                                             // if ($.content.content !== "pr") {
//                                             //     onError($.content.annotation, `expected 'pr'`)
//                                             // }
//                                         })
//                                         break
//                                     default:
//                                         pl.au($[0])
//                                 }
//                             })
//                         })
//                     })
//                     $.globals.forEach(($) => {
//                         pl.logDebugMessage("!!!!!!!!!!!")
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
//                                     expected: `C`,
//                                 },
//                             )
//                         })
//                     })
//                 })
//             },
//         )
//     }
// }