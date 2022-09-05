import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"

import * as uglyStuff from "api-pareto-ugly-stuff"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface/types/types"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalType } from "./convertLocalType"
import { convertLocalInterface } from "./convertLocalInterface"
import { convertFunction } from "./convertFunction"
import { convertDependencies } from "./convertDependencies"
import { FFirstCharacter } from "../../../cleanup/imp/cleanup"

export type DTS2ParetoDependencies = {
    readonly firstCharacter: FFirstCharacter
    readonly startsWith: uglyStuff.FStartsWith
}

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
        | ["asynchronous function", {}]
        | ["tbd", {}]
    function getType(): TTypeAliasType {
        const firstCharacter = $d.firstCharacter($.name.myValue)
        switch (firstCharacter) {
            case "A": return ["asynchronous function", {}]
            case "F": return ["function", {}]
            case "X": return ["tbd", {}]
            // case "T": return ["type", {}]
            default: {
                logMessage(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Unknown type alias: ${$.name.myValue}`, typeAlias.details)
                return ["tbd", {}]
            }
        }
    }

    const type = getType()

    const x = pl.cc($.type, ($): undefined | t.TGlobalType => {

        switch (type[0]) {
            case "asynchronous function":
                return pl.cc(type[1], ($) => {
                    //$i.logMessage("AF", typeAlias.type.annotation)
                    return ["tbd", {}]
                })
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
            case "tbd":
                return pl.cc(type[1], ($) => {
                    return ["tbd", {}]
                })
            default: return pl.au(type[0])
        }
    })
    return {
        name: $.name.myValue,
        value: undefined,
    }
}

