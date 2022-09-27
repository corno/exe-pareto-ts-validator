import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface"
import { DTS2ParetoDependencies } from "../../interface"
import * as t from "../../interface"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalType } from "./convertLocalType"
import { ILog } from "../types/Log"

export function nullToUndefined<T>($: null | T): undefined | T {
    if ($ === null) {
        return undefined
    } else {
        return $
    }
}


type TGlobalTypePair = {
    name: string,
    value: undefined | t.TGlobalType
}


export function convertGlobalType<PAnnotation>(
    $: ts.TTypeAlias<PAnnotation>,
    $i: ILog<PAnnotation>,
    $d: DTS2ParetoDependencies,
): TGlobalTypePair {

    const typeAlias = $
    function logMessage(message: string, annotation: PAnnotation) {
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
            type: nullToUndefined(convertLocalType(typeAlias.type, $i, $d))
        },
    }
}
