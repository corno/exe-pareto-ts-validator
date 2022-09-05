import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"

import * as uglyStuff from "api-pareto-ugly-stuff"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface/types/types"
import { convertLocalInterface } from "./convertLocalInterface"
import { FFirstCharacter } from "../../../cleanup/imp/cleanup"

export type DTS2ParetoDependencies = {
    readonly firstCharacter: FFirstCharacter
    readonly startsWith: uglyStuff.FStartsWith
}

type TDependencyPair = {
    name: string,
    value: undefined | t.TGlobalInterface
}


export function convertDependency<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ($: {
        message: string
        annotation: Annotation
    }) => void,
    $d: DTS2ParetoDependencies,
): TDependencyPair {

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

    if ($d.firstCharacter($.name.myValue) !== "D") {

        logMessage(`expected a dependency definition (starting with a D): ${$.name.myValue}`, typeAlias.details)
    }
    

    return {
        name: $.name.myValue,
        value: {
            type: undefined
        },
    }
}
