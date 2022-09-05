import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"


import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"
import { convertLocalType } from "./convertLocalType"
export function convertLocalInterface<Annotation>(
    $: ts.TType<Annotation>,
    logMessage: ($: string, context: Annotation) => void,
    $d: {
        firstCharacter: (str: string) => string
    }
): t.TLocalInterface | undefined {
    const context = $.annotation

    switch ($.type[0]) {
        case "array":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use an array in an interface", context)
                return undefined
            })
        case "booleanKeyword":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a boolean keyword in an interface", context)
                return undefined
            })
        case "function":
            return pl.cc($.type[1], ($) => {
                $.parameters.forEach(($) => {

                    if ($.type === null) {
                        return undefined
                    } else {
                        switch ($.name.myValue) {
                            case "$":
                                convertLocalType($.type, logMessage, $d)

                                break
                            case "$c":
                                if ($.type.type[0] !== "function") {
                                    logMessage("Interface issue", $.type.annotation)
                                } else {
                                    pl.cc($.type.type[1], ($) => {
                                        $.parameters.forEach(($) => {
                                            if ($.type === null) {

                                            } else {
                                                convertLocalInterface($.type, logMessage, $d)
                                            }
                                        })
                                    })
                                }
                                //convertInterface($.type, logMessage)
                                break
                            // case "$":
                            //     break
                            // case "$":
                            //     break
                            default:
                                logMessage("unexpected parameter", $.type.annotation)
                        }
                    }
                })
                if ($.returnType === null) {
                    return undefined
                } else {
                    if ($.returnType.type[0] === "voidKeyword") {

                    } else {
                        convertLocalInterface($.returnType, logMessage, $d)
                    }
                }
                // logMessage("cant use a function in an interface", context)
                return ["tbd", {}]
            })
        case "literal":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a literal in an interface", context)
                return undefined
            })
        case "numberKeyword":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a number keyword in an interface", context)
                return undefined
            })
        case "optional":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use an optional in an interface", context)
                return undefined
            })
        case "parenthesized":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a parenthesized type in an interface", context)
                return undefined
            })
        case "stringKeyword":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a string keyword in an interface", context)
                return undefined
            })
        case "tuple":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a tuple in an interface", context)
                return undefined
            })
        case "typeLiteral":
            return pl.cc($.type[1], ($) => {
                const entries = pc.createUnsafeDictionaryBuilder<t.TTypeSignature>()
                $.forEach(($) => {

                    const annotation = $.annotation
                    switch ($.type[0]) {
                        case "index":
                            return pl.cc($.type[1], ($) => {
                                logMessage("cant use an index", annotation)
                            })
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
                                        const x = convertLocalInterface($.type, logMessage, $d)
                                    }
                                    //entries.add(name,)
                                }
                            })
                        default: pl.au($.type[0])
                    }
                })
                return ["tbd", {}]
            })
        case "typeReference":
            return pl.cc($.type[1], ($) => {
                pl.cc($.identification, ($) => {
                    switch ($[0]) {
                        case "identifier":
                            return pl.cc($[1], ($) => {

                                if ($d.firstCharacter($.myValue) !== "I") {
                                    logMessage(`WRONG INTERFACE REFERENCE ${$.myValue} !!!!!!!!!!!######################################!!!!!!!!!!!`, context)
                                }
                            })
                        case "qualifiedName":

                            return pl.cc($[1], ($) => {
                                if ($.context.myValue === "pt") {

                                } else {
                                    if ($d.firstCharacter($.type.myValue) !== "I") {
                                        logMessage(`WRONG INTERFACE REFERENCE ${$.type.myValue} !!!!!!!!!!!!!!@#######################################!!!!!!!!!!!!!`, context)
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
                logMessage("cant use 'undefined' in an interface", context)
                return undefined
            })
        case "union":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use a union in an interface", context)
                return undefined
            })
        case "voidKeyword":
            return pl.cc($.type[1], ($) => {
                logMessage("cant use 'void' in an interface", context)
                return undefined
            })
        default: return pl.au($.type[0])
    }
}