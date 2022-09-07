import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertFunction } from "./convertFunction"
import { DTS2ParetoDependencies } from "../../interface/dependencies/x"
import { convertProcedure } from "./convertProcedure"

type TAlgorithmPair = {
    name: string,
    value: undefined | t.TAlgorithm
}


export function convertAlgorithm<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ($: {
        message: string
        annotation: Annotation
    }) => void,
    $d: DTS2ParetoDependencies,
): TAlgorithmPair {

    const typeAlias = $
    function logMessage(message: string, annotation: Annotation) {
        $i({
            message: message,
            annotation: annotation,
        })
    }

    const hasExport = typeAlias.modifiers.reduce(false, (current, $) => {
        return $[0] === "export"
            ? true
            : current
    })
    if (!hasExport) {
        logMessage(`NO EXPORT: ${typeAlias.name.myValue}`, typeAlias.details)
    }

    type TTypeAliasType =
        | ["function", {}]
        | ["procedure", {}]
    function getType(): TTypeAliasType | null {
        const firstCharacter = $d.firstCharacter($.name.myValue)
        switch (firstCharacter) {
            //case "A": return ["asynchronous function", {}]
            case "F": return ["function", {}]
            case "P": return ["procedure", {}]
            //case "X": return ["tbd", {}]
            // case "T": return ["type", {}]
            default: {
                logMessage(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Unknown type alias: ${$.name.myValue}`, typeAlias.details)
                return null
            }
        }
    }

    const type = getType()

    const x = pl.cc($.type, ($): undefined | t.TGlobalType => {
        if (type === null) {

        } else {
            switch (type[0]) {
                case "function":
                    return pl.cc(type[1], ($) => {
                        //typeAlias.
                        convertFunction(
                            typeAlias.type,
                            logMessage,
                            $d,
                        )
                        //$i.logMessage("FUNCTION", typeAlias.type.annotation)
                        return ["tbd", {}]

                    })
                case "procedure":
                    return pl.cc(type[1], ($) => {
                        convertProcedure(
                            typeAlias.type,
                            logMessage,
                            $d,
                        )
                        return ["tbd", {}]
                    })
                default: return pl.au(type[0])
            }
        }
    })
    return {
        name: $.name.myValue,
        value: undefined,
    }
}

