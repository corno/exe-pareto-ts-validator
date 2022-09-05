import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"


import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface/types/types"
import { convertIdentifierOrStringLiteral } from "./convertIdentifierOrStringLiteral"
import { convertLocalType } from "./convertLocalType"
export function convertDependencies<Annotation>(
    $: ts.TType<Annotation>,
    logMessage: ($: string, context: Annotation) => void,
    $d: {
        firstCharacter: (str: string) => string
    }
): t.TDependencies | undefined {
    const context = $.annotation

    if ($.type[0] !== "typeLiteral") {
        logMessage(`expected a type literal`, context)
    } else {
        pl.cc($.type[1], ($) => {

            const entries = pc.createUnsafeDictionaryBuilder<t.TTypeSignature>()
            $.forEach(($) => {

                const annotation = $.annotation
                switch ($.type[0]) {
                    case "index":
                        return pl.cc($.type[1], ($) => {
                            logMessage("can't use an index", annotation)
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
                                    if ($.type.type[0] !== "typeReference") {
                                        logMessage(`expected a type reference`, $.type.annotation)
                                    }
                                    //const x = convertInterface($.type, logMessage, $d)
                                }
                                //entries.add(name,)
                            }
                        })
                    default: pl.au($.type[0])
                }
            })
            return ["tbd", {}]
        })
        return undefined
    }
}