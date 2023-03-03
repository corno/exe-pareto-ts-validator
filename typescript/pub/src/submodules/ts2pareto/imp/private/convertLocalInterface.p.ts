import * as pl from 'pareto-core-lib'
// import * as pc from "pareto-core-candidates"


// import * as ts from "../../../cleanup/interface"
// import * as t from "../../interface"
// import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"
// import { convertLocalType } from "./convertLocalType"
// import { DTS2ParetoDependencies } from "../../interface"
// import { createLogger } from "./createLogger"
// import { ILog } from "../types/Log"
// export function convertLocalInterface<PAnnotation>(
//     $: ts.TType<PAnnotation>,
//     $i: ILog<PAnnotation>,
//     $d: DTS2ParetoDependencies
// ): t.TLocalInterface | undefined {
//     const logMessage = createLogger($.annotation, $i)

//     switch ($.type[0]) {
//         case "array":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use an array in an interface")
//                 return undefined
//             })
//         case "booleanKeyword":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a boolean keyword in an interface")
//                 return undefined
//             })
//         case "function":
//             return pl.cc($.type[1], ($) => {
//                 $.parameters.forEach(($) => {
//                     const logMessage = createLogger($.annotation, $i)

//                     if ($.type === null) {
//                         return undefined
//                     } else {
//                         switch ($.name.myValue) {
//                             case "$":
//                                 convertLocalType($.type, $i, $d)

//                                 break
//                             case "$c":
//                                 if ($.type.type[0] !== "function") {
//                                     logMessage("Interface issue")
//                                 } else {
//                                     pl.cc($.type.type[1], ($) => {
//                                         $.parameters.forEach(($) => {
//                                             const logMessage = createLogger($.annotation, $i)

//                                             if ($.type === null) {

//                                             } else {
//                                                 convertLocalInterface($.type, $i, $d)
//                                             }
//                                         })
//                                     })
//                                 }
//                                 //convertInterface($.type, logMessage)
//                                 break
//                             // case "$":
//                             //     break
//                             // case "$":
//                             //     break
//                             default:
//                                 logMessage("unexpected parameter")
//                         }
//                     }
//                 })
//                 if ($.returnType === null) {
//                     return undefined
//                 } else {
//                     if ($.returnType.type[0] === "voidKeyword") {

//                     } else {
//                         convertLocalInterface($.returnType, $i, $d)
//                     }
//                 }
//                 // logMessage("cant use a function in an interface", context)
//                 return ["tbd", {}]
//             })
//         case "literal":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a literal in an interface")
//                 return undefined
//             })
//         case "numberKeyword":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a number keyword in an interface")
//                 return undefined
//             })
//         case "optional":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use an optional in an interface")
//                 return undefined
//             })
//         case "parenthesized":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a parenthesized type in an interface")
//                 return undefined
//             })
//         case "stringKeyword":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a string keyword in an interface")
//                 return undefined
//             })
//         case "tuple":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a tuple in an interface")
//                 return undefined
//             })
//         case "typeLiteral":
//             return pl.cc($.type[1], ($) => {
//                 const entries = pc.createUnsafeDictionaryBuilder<t.TTypeSignature>()
//                 $.forEach(($) => {

//                     const logMessage = createLogger($.annotation, $i)
//                     switch ($.type[0]) {
//                         case "index":
//                             return pl.cc($.type[1], ($) => {
//                                 logMessage("cant use an index")
//                             })
//                         case "property":
//                             return pl.cc($.type[1], ($) => {
//                                 const hasReadonlyFlag = $.modifiers.reduce(false, (current, $) => $[0] === "readonly" ? true : current)
//                                 if (!hasReadonlyFlag) {
//                                     logMessage("no readonly flag")
//                                 }
//                                 if ($.type !== null) {
//                                     const name = convertIdentifierOrStringLiteral($.name)
//                                     if ($.type === null) {

//                                     } else {
//                                         const x = convertLocalInterface($.type, $i, $d)
//                                     }
//                                     //entries.add(name,)
//                                 }
//                             })
//                         default: pl.au($.type[0])
//                     }
//                 })
//                 return ["tbd", {}]
//             })
//         case "typeReference":
//             return pl.cc($.type[1], ($) => {
//                 pl.cc($.identification, ($) => {
//                     switch ($[0]) {
//                         case "identifier":
//                             return pl.cc($[1], ($) => {
//                                 pl.cc($d.analyseInterfaceName($.myValue), ($) => {
//                                     if ($ === null) {
//                                         logMessage(`WRONG INTERFACE REFERENCE !!!!!!!!!!!######################################!!!!!!!!!!!`)

//                                     }
//                                 })

//                             })
//                         case "qualifiedName":

//                             return pl.cc($[1], ($) => {
//                                 if ($.context.myValue === "pt") {

//                                 } else {
//                                     pl.cc($d.analyseInterfaceName($.type.myValue), ($) => {
//                                         if ($ === null) {
//                                             logMessage(`WRONG INTERFACE REFERENCE  !!!!!!!!!!!######################################!!!!!!!!!!!`)

//                                         }
//                                     })
//                                 }
//                             })

//                         default: return pl.au($[0])
//                     }

//                 })
//                 return ["reference", {}]
//             })
//         case "undefinedKeyword":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use 'undefined' in an interface")
//                 return undefined
//             })
//         case "union":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use a union in an interface")
//                 return undefined
//             })
//         case "voidKeyword":
//             return pl.cc($.type[1], ($) => {
//                 logMessage("cant use 'void' in an interface")
//                 return undefined
//             })
//         default: return pl.au($.type[0])
//     }
// }