import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalInterface } from "./convertLocalInterface"
import { DTS2ParetoDependencies } from "../../interface/dependencies/dependencies"
import { ILog } from "../types/Log"

type TGlobalInterfacePair = {
    name: string,
    value: undefined | t.TGlobalInterface
}


export function convertGlobalInterface<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ILog<Annotation>,
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

    pl.cc($d.analyseInterfaceName($.name.myValue), ($) => {
        if ($ === null) {
        logMessage(`expected an interface (starting with a I)`, typeAlias.details)

        }
    })

    return {
        name: $.name.myValue,
        value: {
            type: convertLocalInterface(typeAlias.type, $i, $d)
        },
    }
}
