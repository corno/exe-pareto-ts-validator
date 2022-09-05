

import * as ts from "../../../cleanup/interface/types/types"
import { DTS2ParetoDependencies } from "../../interface/dependencies/x"
import * as t from "../../interface/types/types"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalType } from "./convertLocalType"


type TGlobalTypePair = {
    name: string,
    value: undefined | t.TGlobalType
}


export function convertGlobalType<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ($: {
        message: string
        annotation: Annotation
    }) => void,
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

    if ($d.firstCharacter($.name.myValue) !== "T") {

        logMessage(`expected a type (starting with a T): ${$.name.myValue}`, typeAlias.details)
    }
    

    return {
        name: $.name.myValue,
        value: {
            type: convertLocalType(typeAlias.type, logMessage, $d)
        },
    }
}
