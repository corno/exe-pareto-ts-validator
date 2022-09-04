import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pc from "pareto-core-candidates"

import * as ts from "../../cleanup/types"
import * as t from "../types"
import { unsafeToDictionary } from "../../paretoCandidates"
import { convertType } from "./convertType"

export function ts2pareto<Annotation>(
    $: ts.TSourceFile<Annotation>,
    $i: {
        logMessage: ($: string, context: Annotation) => void
    },
    $d: {
        firstCharacter: (str: string) => string
    },
) {
    const logMessage = $i.logMessage

    type TTypeAliasType =
        | ["type", {}]
        | ["dependencies", {}]
        | ["interface", {}]
        | ["function", {}]
        | ["asynchronous function", {}]
        | ["tbd", {}]


    const typeAliases = pc.filterArray<ts.TStatement<Annotation>, ts.TTypeAlias<Annotation>>($.statements, ($) => {
        return $.type[0] === "typeAlias" ? $.type[1] : undefined
    })

    type TParetoTypeAliasPair = {
        name: string,
        value: undefined | t.TParetoTypeAlias
    }

    const filtered = pc.filterArray(typeAliases, ($): undefined | TParetoTypeAliasPair => {

        const typeAlias = $

        const hasExport = typeAlias.modifiers.reduce(false, (current, $) => {
            return $[0] === "export"
                ? true
                : current
        })
        if (!hasExport) {
            logMessage(`NO EXPORT: ${typeAlias.name.myValue}`, typeAlias.details)
        }

        function getType(): TTypeAliasType {
            const firstCharacter = $d.firstCharacter($.name.myValue)
            switch (firstCharacter) {
                case "T": return ["type", {}]
                case "I": return ["interface", {}]
                case "A": return ["asynchronous function", {}]
                case "F": return ["function", {}]
                case "D": return ["dependencies", {}]
                case "X": return ["tbd", {}]
                // case "T": return ["type", {}]
                default: {
                    logMessage(`Unknown type alias: ${$.name.myValue}`, typeAlias.details)
                    return ["tbd", {}]
                }
            }
        }

        const type = getType()

        const x = pl.cc($.type, ($): undefined | t.TParetoTypeAlias => {

            switch (type[0]) {
                case "asynchronous function":
                    return pl.cc(type[1], ($) => {
                        return ["tbd", {}]
                    })
                case "function":
                    return pl.cc(type[1], ($) => {
                        return ["tbd", {}]

                    })
                case "interface":
                    return pl.cc(type[1], ($) => {
                        return ["tbd", {}]
                    })
                case "tbd":
                    return pl.cc(type[1], ($) => {
                        return ["tbd", {}]
                    })
                case "type":
                    return pl.cc(type[1], ($) => {
                        return pl.cc(
                            convertType(typeAlias.type, logMessage),
                            ($) => {
                                return $ === undefined ? undefined : ["type", $]
                            },
                        )
                    })
                case "dependencies":
                    return pl.cc(type[1], ($) => {
                        return ["tbd", {}]
                    })
                default: return pl.au(type[0])
            }
        })
        return {
            name: $.name.myValue,
            value: x,
        }

    })

    const typeAliases2 = unsafeToDictionary(
        pc.filterArray(filtered, ($) => {
            if ($.value === undefined) {
                return undefined
            } else {
                return {
                    value: $.value,
                    name: $.name
                }
            }
        }),
        ($) => { return { key: $.name, value: $.value } }
    )


}