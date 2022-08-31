
// import * as pl from "pareto-core-lib"
// import * as typeParser from "../generated/paretoGrammar"
// import { _typescriptFileStructure } from "../../data/paretoProject"
// import { doAT, Handle, OnError } from "../handle"
// import { TAnnotatedString } from "../generated/paretoGrammar"
// import { TOut, TTypeAlias } from "../ParetoTypes"


// function doReferencedType<Annotation>(
//     $: typeParser.TVGtype_typeReference<Annotation>
// ) {
//     doAT($, ($) => {

//         switch ($.referencedType[0]) {
//             case "identifier":
//                 pl.cc($.referencedType[1], ($) => {
//                     $.value
//                 })
//                 break
//             case "qualifiedName":
//                 pl.cc($.referencedType[1], ($) => {
//                     doAT($, ($) => {
//                         $.context.value
//                         $.type.value
//                     })
//                 })
//                 break
//             default: pl.au($.referencedType[0])
//         }
//         $.typeArguments.forEach(($) => {
//             doType($)
//         })
//     })
// }

// function doType<Annotation>(
//     $: typeParser.TVroot_globals$_type<Annotation>
// ) {
//     switch ($[0]) {
//         case "array":
//             pl.cc($[1], ($) => {
//                 doAT($, ($) => {
//                     doType($)
//                 })
//             })
//             break
//         case "boolean":
//             pl.cc($[1], ($) => {

//             })
//             break
//         case "literalType":
//             pl.cc($[1], ($) => {
//                 doAT($, ($) => {
//                     //null
//                 })
//             })
//             break
//         case "number":
//             pl.cc($[1], ($) => {
//                 //number keyword
//             })
//             break
//         case "string":
//             pl.cc($[1], ($) => {

//             })
//             break
//         case "typeLiteral":
//             pl.cc($[1], ($) => {
//                 doAT($, ($) => {
//                     if ($ !== null) {
//                         switch ($[0]) {
//                             case "index":
//                                 pl.cc($[1], ($) => {
//                                     doAT($, ($) => {
//                                         $.key
//                                         doType($.type)
//                                     })
//                                 })
//                                 break
//                             case "properties":
//                                 pl.cc($[1], ($) => {
//                                     $.forEach(($) => {
//                                         doAT($, ($) => {
//                                             $.name
//                                             $.questionToken
//                                             doType($.type)
//                                         })
//                                     })

//                                 })
//                                 break
//                             default: pl.au($[0])
//                         }
//                     }
//                 })
//             })
//             break
//         case "typeReference":
//             pl.cc($[1], ($) => {
//                 doReferencedType($)
//             })
//             break
//         case "union":
//             pl.cc($[1], ($) => {
//                 doAT($, ($) => {
//                     $.forEach(($) => {
//                         doAT($, ($) => {
//                             doAT($.state, ($) => {
//                                 $.value
//                             })
//                             doType($.data)
//                         })
//                     })
//                 })
//             })
//             break
//         default: pl.au($[0])
//     }

// }

// export function doTypeFile<Annotation>(
//     handle: Handle<Annotation, typeParser.TNroot<Annotation>>,
//     out: TOut<Annotation>,
//     onError: OnError<Annotation>,
// ): () => void {
//     return () => {
//         handle(
//             typeParser.parse,
//             ($) => {
//                 doAT($, ($) => {
//                     $.imports.forEach(($) => {
//                         doAT($, ($) => {
//                             console.log($.file.value)
//                             doAT($.clause, ($) => {
//                                 switch ($[0]) {
//                                     case "named":
//                                         pl.cc($[1], ($) => {
//                                             doAT($, ($) => {
//                                                 $.forEach(($) => {
//                                                     doAT($, ($) => {
//                                                         console.log($.name.value)

//                                                         console.log($.as?.value)
//                                                     })
//                                                 })
//                                             })
//                                         })
//                                         break
//                                     case "namespace":
//                                         pl.cc($[1], ($) => {
//                                             doAT($, ($) => {
//                                                 console.log($.value)
//                                             })
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
//                         doAT($, ($) => {
//                             const ta: TTypeAlias<Annotation> = {
//                                 typeParameters: {}
//                             }
//                             function add<Type>(
//                                 $: {
//                                     string: TAnnotatedString<Annotation>,
//                                     expectedPrefix: string,
//                                     v: Type,
//                                     dict: { [key: string]: Type },
//                                 }
//                             ): void {
//                                 if (!$.string.value.startsWith($.expectedPrefix)) {
//                                     onError($.string.annotation, `invalid name`, `must start wih '${$.expectedPrefix}'`)
//                                 } else {
//                                     $.dict[$.string.value.substring($.expectedPrefix.length)] = $.v
//                                 }
//                             }
//                             add(
//                                 {
//                                     string: $.name,
//                                     expectedPrefix: `T`,
//                                     v: ta,
//                                     dict: out.typeAliases,
//                                 }
//                             )
//                             $.typeParameters.forEach(($) => {
//                                 doAT($, ($) => {
//                                     add({

//                                         string: $,
//                                         expectedPrefix: ``,
//                                         v: {},
//                                         dict: ta.typeParameters,
//                                     })
//                                     console.log($.value)
//                                 })
//                             })
//                             doType($.type)
//                         })
//                     })
//                 })
//             },
//         )
//     }
// }