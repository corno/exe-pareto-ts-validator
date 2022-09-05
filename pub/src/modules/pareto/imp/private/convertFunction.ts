import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"


import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"
import { convertLocalType } from "./convertLocalType"
export function convertFunction<Annotation>(
    $: ts.TType<Annotation>,
    logMessage: ($: string, context: Annotation) => void,
    $d: {
        firstCharacter: (str: string) => string
    }
): t.TFunction | undefined {
    const context = $.annotation

    if ($.type[0] !== "function") {
        logMessage("expected a function", context)
        return undefined
    } else {
        pl.cc($.type[1], ($) => {
            $.parameters.forEach(($) => {
                switch ($.name.myValue) {
                    case "$":
                        if ($.type === null) {
                            logMessage(`missing type`, context)//FIX Context
                        } else {
                            convertLocalType($.type, logMessage, $d)
                        }
                        break
                    case "$d":
                        break
                    default:
                        logMessage(`unexpected paramter: ${$.name.myValue}`, context)
                }
            })
            if ($.returnType === null) {
                logMessage(`Expected a return type`, context)
            } else {
                convertLocalType(
                    $.returnType,
                    logMessage,
                    $d,
                )
            }
        })
    }
}