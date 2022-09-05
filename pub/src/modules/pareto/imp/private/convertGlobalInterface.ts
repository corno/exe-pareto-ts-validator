

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertLocalInterface } from "./convertLocalInterface"
import { DTS2ParetoDependencies } from "../../interface/dependencies/x"

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
