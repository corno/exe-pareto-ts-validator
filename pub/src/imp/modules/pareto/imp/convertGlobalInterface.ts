import * as pl from "pareto-core-lib"
import * as pc from "pareto-core-candidates"

import * as uglyStuff from "api-pareto-ugly-stuff"

import * as ts from "../../cleanup/types"
import * as t from "../types"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalType } from "./convertLocalType"
import { convertLocalInterface } from "./convertLocalInterface"
import { convertFunction } from "./convertFunction"
import { convertDependencies } from "./convertDependencies"
import { FFirstCharacter } from "../../cleanup/imp/cleanup"

export type DTS2ParetoDependencies = {
    readonly firstCharacter: FFirstCharacter
    readonly startsWith: uglyStuff.FStartsWith
}

type TGlobalInterfacePair = {
    name: string,
    value: undefined | t.TGlobalInterface
}


export function convertGlobalInterface<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ($: {
        message: string
        annotation: Annotation
    }) => void,
    $d: DTS2ParetoDependencies,
): TGlobalInterfacePair {

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

    if ($d.firstCharacter($.name.myValue) !== "I") {

        logMessage(`expected an interface (starting with a I): ${$.name.myValue}`, typeAlias.details)
    }
    

    return {
        name: $.name.myValue,
        value: {
            type: convertLocalInterface(typeAlias.type, logMessage, $d)
        },
    }
}
