import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface/types/types"
import { DTS2ParetoDependencies } from "../../interface/dependencies/dependencies"
import * as t from "../../interface"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalType } from "./convertLocalType"
import { ILog } from "../types/Log"


type TGlobalTypePair = {
    name: string,
    value: undefined | t.TGlobalType
}


export function convertGlobalType<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ILog<Annotation>,
    $d: DTS2ParetoDependencies,
): TGlobalTypePair {

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

    pl.cc($d.analyseTypeName($.name.myValue), ($) => {
        if ($ === null) {
        logMessage(`expected a type (starting with a T)`, typeAlias.details)

        }
    })
    

    return {
        name: $.name.myValue,
        value: {
            type: convertLocalType(typeAlias.type, $i, $d)
        },
    }
}
