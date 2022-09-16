import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pc from "pareto-core-candidates"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"
import { DTS2ParetoDependencies } from "../../interface"
import { ILog } from "../types/Log"
import { createLogger } from "./createLogger"

// export type XType = {
//     nullable: boolean,
//     type: t.TParetoType
// }

// export function convertNullOrType<PAnnotation>(
//     $: ts.TType<PAnnotation>,
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

export function convertLocalType<PAnnotation>(
    $: ts.TType<PAnnotation>,
    $i: ILog<PAnnotation>,
    $d: DTS2ParetoDependencies
): t.TLocalType | null {
    const abort = createLogger($.annotation, $i)

    function convertTypeSignature($: ts.TTypeSignature<PAnnotation>) {
        const annotation = $.annotation
        switch ($.type[0]) {
            case "index":
                return pl.cc($.type[1], ($) => {
                    abort("cant use an index")
                })
            // case "method":
            //     return pl.cc($.type[1], ($) => {
            //         logMessage("cant use a method in a type", annotation)
            //     })
            case "property":
                return pl.cc($.type[1], ($) => {
                    const hasReadonlyFlag = $.modifiers.reduce(false, (current, $) => $[0] === "readonly" ? true : current)
                    if (!hasReadonlyFlag) {
                        abort("no readonly flag")
                    }
                    if ($.type !== null) {
                        const name = convertIdentifierOrStringLiteral($.name)
                        if ($.type === null) {

                        } else {
                            const x = convertLocalType($.type, $i, $d)
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
                return abort("cant use an array in a type")
            })
        case "booleanKeyword":
            return pl.cc($.type[1], ($) => {
                return ["boolean keyword", {}]
            })
        case "function":
            return pl.cc($.type[1], ($) => {
                return abort("cant use a function in a type")
            })
        case "literal":
            return pl.cc($.type[1], ($) => {
                return abort("cant use a literal in a type")
            })
        case "numberKeyword":
            return pl.cc($.type[1], ($) => {
                return ["number keyword", {}]
            })
        case "optional":
            return pl.cc($.type[1], ($) => {
                return abort("cant use an optional in a type")
            })
        case "parenthesized":
            return pl.cc($.type[1], ($) => {
                return abort("cant use a parenthesized type in a type")
            })
        case "stringKeyword":
            return pl.cc($.type[1], ($) => {
                return ["string keyword", {}]
            })
        case "tuple":
            return pl.cc($.type[1], ($) => {
                return abort("cant use a tuple like this in a type")
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

                                pl.cc($d.analyseTypeName($.myValue), ($) => {
                                    if ($ === null) {
                                        //logMessage(`WRONG REFERENCE ${$.myValue} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`, context)

                                    }
                                })
                            })
                        case "qualifiedName":

                            return pl.cc($[1], ($) => {
                                if ($.context.myValue === "pt") {

                                } else {
                                    pl.cc($d.analyseTypeName($.type.myValue), ($) => {
                                        if ($ === null) {
                                            //logMessage(`WRONG REFERENCE ${$.myValue} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`, context)

                                        }
                                    })
                                }
                            })

                        default: return pl.au($[0])
                    }

                })
                return ["reference", {}]
            })
        case "undefinedKeyword":
            return pl.cc($.type[1], ($) => {
                return abort("cant use 'undefined' in a type")
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
                                abort(`EXPECTED NULL`)
                            } else {
                                return pl.cc($.type[1], ($) => {
                                    if ($[0] !== "null") {
                                        abort(`EXPECTED NULL`)
                                    } else {
                                        stack.pop( //second
                                            ($) => {
                                                stack.pop( //third
                                                    () => {
                                                        abort("UNEXPECTED AMOUNT OF ENTRIES")
                                                    },
                                                    () => {
                                                        //fully okay
                                                        convertLocalType(
                                                            $,
                                                            $i,
                                                            $d,
                                                        )
                                                    }
                                                )
                                            },
                                            () => {
                                                abort("UNEXPECTED AMOUNT OF ENTRIES")
                                            }
                                        )
                                    }
                                })
                            }
                        } else {

                            return pl.cc($.type[1], ($) => {
                                array.forEach(($) => {
                                    if ($.type[0] !== "tuple") {
                                        abort(`EXPECTED A TUPLE, FOUND: ${$.type[0]}`)
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
                                                                abort("tuple with too many entries")
                                                            },
                                                            () => {
                                                                convertLocalType(
                                                                    second,
                                                                    $i,
                                                                    $d,
                                                                )
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        abort("tuple with only 1 entry")
                                                    }
                                                )
                                            },
                                            () => {
                                                abort("tuple without entries")
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
                return abort("cant use 'void' in a type")
            })
        default: return pl.au($.type[0])
    }
}