import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pc from "pareto-core-candidates"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface/types/types"
import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"

// export type XType = {
//     nullable: boolean,
//     type: t.TParetoType
// }

// export function convertNullOrType<Annotation>(
//     $: ts.TType<Annotation>,
//     logMessage: ($: string, context: Annotation) => void
// ): undefined | XType {
//     if ($.type[0] !== "union") {

//         return pl.cc(convertType($, logMessage), ($) => {
//             return $ === undefined
//                 ? undefined
//                 : {
//                     nullable: false,
//                     type: $
//                 }
//         })
//     } else {
//         return {
//             nullable: true,
//             type: 
//         }
//     }
// }

export function convertLocalType<Annotation>(
    $: ts.TType<Annotation>,
    logMessage: ($: string, context: Annotation) => void,
    $d: {
        firstCharacter: (str: string) => string
    }
): t.TLocalType | undefined {
    const context = $.annotation


    function convertTypeSignature($: ts.TTypeSignature<Annotation>) {
        const annotation = $.annotation
        switch ($.type[0]) {
            case "index":
                return pl.cc($.type[1], ($) => {
                    logMessage("cant use an index", annotation)
                })
            // case "method":
            //     return pl.cc($.type[1], ($) => {
            //         logMessage("cant use a method in a type", annotation)
            //     })
            case "property":
                return pl.cc($.type[1], ($) => {
                    const hasReadonlyFlag = $.modifiers.reduce(false, (current, $) => $[0] === "readonly" ? true : current)
                    if (!hasReadonlyFlag) {
                        logMessage("no readonly flag", annotation)
                    }
                    if ($.type !== null) {
                        const name = convertIdentifierOrStringLiteral($.name)
                        if ($.type === null) {

                        } else {
                            const x = convertLocalType($.type, logMessage, $d)
                        }
                        //entries.add(name,)
                    }
                })
            default: pl.au($.type[0])
        }
    }
    switch ($.type[0]) {
        case "array":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use an array in a type", context)
                return undefined
            })
        case "booleanKeyword":
            return pl.cc($.type[1], ($) => {
                return ["boolean keyword", {}]
            })
        case "function":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a function in a type", context)
                return undefined
            })
        case "literal":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a literal in a type", context)
                return undefined
            })
        case "numberKeyword":
            return pl.cc($.type[1], ($) => {
                return ["number keyword", {}]
            })
        case "optional":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use an optional in a type", context)
                return undefined
            })
        case "parenthesized":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a parenthesized type in a type", context)
                return undefined
            })
        case "stringKeyword":
            return pl.cc($.type[1], ($) => {
                return ["string keyword", {}]
            })
        case "tuple":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a tuple like this in a type", context)
                return undefined
            })
        case "typeLiteral":
            return pl.cc($.type[1], ($) => {
                const entries = pc.createUnsafeDictionaryBuilder<t.TTypeSignature>()
                $.forEach(($) => {

                    convertTypeSignature($)
                })
                return ["tbd", {}]
            })
        case "typeReference":
            return pl.cc($.type[1], ($) => {
                pl.cc($.identification, ($) => {
                    switch ($[0]) {
                        case "identifier":
                            return pl.cc($[1], ($) => {

                                if ($d.firstCharacter($.myValue) !== "T") {
                                    //logMessage(`WRONG REFERENCE ${$.myValue} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`, context)
                                }
                            })
                        case "qualifiedName":

                            return pl.cc($[1], ($) => {
                                if ($.context.myValue === "pt") {

                                } else {
                                    if ($d.firstCharacter($.type.myValue) !== "T") {
                                        //logMessage(`WRONG REFERENCE ${$.type.myValue} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`, context)
                                    }
                                }
                            })

                        default: return pl.au($[0])
                    }

                })
                return ["reference", {}]
            })
        case "undefinedKeyword":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use 'undefined' in a type", context)
                return undefined
            })
        case "union":
            return pl.cc($.type[1], ($) => {
                const array = $
                const stack = pm.createStack($)
                stack.pop( //first
                    ($) => {
                        if ($.type[0] !== "tuple") {
                            //This has to be the 'null | X' pattern
                            if ($.type[0] !== "literal") {
                                logMessage(`EXPECTED NULL`, context)
                            } else {
                                return pl.cc($.type[1], ($) => {
                                    if ($[0] !== "null") {
                                        logMessage(`EXPECTED NULL`, context)
                                    } else {
                                        stack.pop( //second
                                            ($) => {
                                                stack.pop( //third
                                                    () => {
                                                        logMessage("UNEXPECTED AMOUNT OF ENTRIES", context)
                                                    },
                                                    () => {
                                                        //fully okay
                                                        convertLocalType(
                                                            $,
                                                            logMessage,
                                                            $d,
                                                        )
                                                    }
                                                )
                                            },
                                            () => {
                                                logMessage("UNEXPECTED AMOUNT OF ENTRIES", context)
                                            }
                                        )
                                    }
                                })
                            }
                        } else {

                            return pl.cc($.type[1], ($) => {
                                array.forEach(($) => {
                                    if ($.type[0] !== "tuple") {
                                        logMessage(`EXPECTED A TUPLE, FOUND: ${$.type[0]}`, context)
                                    } else {
                                        //there should only be 2 elements
                                        const tupleStack = pm.createStack($.type[1])
                                        tupleStack.pop(
                                            ($) => {
                                                const stateName = $
                                                tupleStack.pop(
                                                    ($) => {
                                                        const second = $
                                                        tupleStack.pop(
                                                            ($) => {
                                                                logMessage("tuple with too many entries", context)
                                                            },
                                                            () => {
                                                                convertLocalType(
                                                                    second,
                                                                    logMessage,
                                                                    $d,
                                                                )
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        logMessage("tuple with only 1 entry", context)
                                                    }
                                                )
                                            },
                                            () => {
                                                logMessage("tuple without entries", context)
                                            }
                                        )
                                    }
                                })
                            })
                        }
                    },
                    () => {
                        pl.panic(`an empty union`)
                    }
                )

                return ["tbd", {}]
            })
        case "voidKeyword":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use 'void' in a type", context)
                return undefined
            })
        default: return pl.au($.type[0])
    }
}