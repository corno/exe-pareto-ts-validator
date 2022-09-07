import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"


import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
import { convertLocalType } from "./convertLocalType"
import { convertLocalInterface } from "./convertLocalInterface"
import { DTS2ParetoDependencies } from "../../interface"
import { ILog } from "../types/Log"
import { createLogger } from "./createLogger"
export function convertFunctionDefinition<Annotation>(
    $: ts.TType<Annotation>,
    $i: ILog<Annotation>,
    $d: DTS2ParetoDependencies
): t.TFunction | undefined {
    const logMessage = createLogger($.annotation, $i)

    if ($.type[0] !== "function") {
        return logMessage("expected a function")
    } else {
        pl.cc($.type[1], ($) => {
            $.parameters.forEach(($) => {
                const logMessage = createLogger($.annotation, $i)

                switch ($.name.myValue) {
                    case "$":
                        if ($.type === null) {
                            return logMessage(`missing type`)
                        } else {
                            return convertLocalType($.type, $i, $d)
                        }
                    case "$i":
                        if ($.type === null) {
                            logMessage(`missing interface`)//FIX Context
                        } else {
                            convertLocalInterface($.type, $i, $d)
                        }
                        break
                    case "$a":
                        if ($.type === null) {
                            logMessage(`missing async`)//FIX Context
                        } else {
                            const logMessage = createLogger($.type.annotation, $i)
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
                logMessage(`Expected a return type`)
            } else {
                convertLocalType(
                    $.returnType,
                    $i,
                    $d,
                )
            }
        })
    }
}