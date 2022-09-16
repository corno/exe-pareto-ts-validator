import * as pl from "pareto-core-lib"


import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
import { convertLocalType } from "./convertLocalType"
import { convertLocalInterface } from "./convertLocalInterface"
import { DTS2ParetoDependencies } from "../../interface"
import { ILog } from "../types/Log"
import { createLogger } from "./createLogger"

export function convertProcedure<PAnnotation>(
    $: ts.TType<PAnnotation>,
    $i: ILog<PAnnotation>,
    $d: DTS2ParetoDependencies
): t.TProcedure | undefined {
    const logMessage = createLogger($.annotation, $i)

    if ($.type[0] !== "function") {
        logMessage("expected a typescript function")
        return undefined
    } else {
        pl.cc($.type[1], ($) => {
            $.parameters.forEach(($) => {
                const logMessage = createLogger($.annotation, $i)
                switch ($.name.myValue) {
                    case "$":
                        if ($.type === null) {
                            logMessage(`missing type`)//FIX Context
                        } else {
                            convertLocalType($.type, $i, $d)
                        }
                        break
                    case "$i":
                        if ($.type === null) {
                            logMessage(`missing interface`)//FIX Context
                        } else {
                            convertLocalInterface($.type, $i, $d)
                        }
                        break
                    case "$c":
                        if ($.type === null) {
                            logMessage(`missing callback`)//FIX Context
                        } else {
                            const logMessage = createLogger($.type.annotation, $i)
                            if ($.type.type[0] !== "function") {
                                logMessage("callback issue")
                            } else {
                                pl.cc($.type.type[1], ($) => {
                                    $.parameters.forEach(($) => {
                                        if ($.name.myValue !== "$i") {
                                            logMessage("callback issue")

                                        }
                                        if ($.type === null) {
                                            logMessage(` callback`)//FIX Context

                                        } else {
                                            //FIXME
                                            convertLocalInterface($.type, $i, $d)
                                        }
                                    })
                                })
                            }
                        }
                        break
                    case "$a":
                        if ($.type === null) {
                            logMessage(`missing async`)//FIX Context
                        } else {
                            if ($.type.type[0] !== "typeReference") {
                                logMessage(`wrong async`)//FIX Context
                            } else {
                                if ($.type.type[1].identification[0] !== "qualifiedName") {
                                    logMessage(`wrong async`)//FIX Context
                                } else {

                                    if ($.type.type[1].identification[1].context.myValue !== "pt") {
                                        logMessage(`wrong async`)//FIX Context
                                    } else {

                                        if ($.type.type[1].identification[1].type.myValue !== "ProcessAsyncValue") {
                                            logMessage(`wrong async`)//FIX Context
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
                        logMessage(`unexpected paramter: ${$.name.myValue}`)
                }
            })
            if ($.returnType === null) {
                logMessage(`Expected 'void'`)
            } else {
                if ($.returnType.type[0] !== "voidKeyword") {
                    createLogger($.returnType.annotation, $i)(`Expected 'void'`)
                }
            }
        })
    }
}