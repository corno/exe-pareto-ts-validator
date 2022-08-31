
// import * as dataParser from "../../generated/dataGrammar"
// import { _typescriptFileStructure } from "../../data/paretoProject"
// import { doAT, Handle, OnError } from "../handle"
// import { TAnnotatedString } from "../../generated/paretoGrammar"

// export function doData<Annotation>(
//     handle: Handle<Annotation, dataParser.TNroot<Annotation>>,
//     onError: OnError<Annotation>,
// ): () => void {
//     return () => {
//         handle(
//             dataParser.parse,
//             ($) => {
//                 doAT($, ($) => {
//                     $.variables.forEach(($) => {
//                         doAT($, ($) => {
//                             doAT($.variableDeclarationList, ($) => {
//                                 $.forEach(($) => {
//                                     doAT($, ($) => {
//                                         function startsWith(
//                                             $: {
//                                                 string: TAnnotatedString<Annotation>,
//                                                 expected: string
//                                             }
//                                         ): void {
//                                             if (!$.string.value.startsWith($.expected)) {
//                                                 onError($.string.annotation, `invalid name`, `must start wih '${$.expected}'`)
//                                             }
//                                         }
//                                         startsWith(
//                                             {
//                                                 string: $.name,
//                                                 expected: `_`,
//                                             },
//                                         )
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//                 //handle result
//             },
//         )
//     }
// }