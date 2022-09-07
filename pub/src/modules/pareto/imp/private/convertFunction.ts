import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"


import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"
import { convertLocalType } from "./convertLocalType"
import { convertLocalInterface } from "./convertLocalInterface"
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
                    case "$i":
                        if ($.type === null) {
                            logMessage(`missing interface`, context)//FIX Context
                        } else {
                            convertLocalInterface($.type, logMessage, $d)
                        }
                        break
                    case "$a":
                        if ($.type === null) {
                            logMessage(`missing async`, context)//FIX Context
                        } else {
                            if ($.type.type[0] !== "typeReference") {
                                logMessage(`wrong async`, context)//FIX Context
                            } else {
                                if ($.type.type[1].identification[0] !== "qualifiedName") {
                                    logMessage(`wrong async`, context)//FIX Context
                                } else {

                                    if ($.type.type[1].identification[1].context.myValue !== "pt") {
                                        logMessage(`wrong async`, context)//FIX Context
                                    } else {

                                        if ($.type.type[1].identification[1].type.myValue !== "ProcessAsyncValue") {
                                            logMessage(`wrong async`, context)//FIX Context
                                        } else {
                                            //okay
                                        }
                                    }
                                }
                            }
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