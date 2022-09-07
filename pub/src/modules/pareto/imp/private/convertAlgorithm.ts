import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface"
// import { unsafeToDictionary } from "../../../private/paretoCandidates"
import { convertFunctionDefinition } from "./convertFunctionDefinition"
import { DTS2ParetoDependencies } from "../../interface/dependencies/dependencies"
import { convertProcedure } from "./convertProcedure"
import { ILog } from "../types/Log"
import { createLogger } from "./createLogger"

type TAlgorithmPair = {
    name: string,
    value: undefined | t.TAlgorithm
}


export function convertAlgorithm<Annotation>(
    $: ts.TTypeAlias<Annotation>,
    $i: ILog<Annotation>,
    $d: DTS2ParetoDependencies,
): TAlgorithmPair {

    const logMessage = createLogger($.details, $i)

    const hasExport = $.modifiers.reduce(false, (current, $) => {
        return $[0] === "export"
            ? true
            : current
    })
    if (!hasExport) {
        logMessage(`NO EXPORT: ${$.name.myValue}`)
    }

    type TTypeAliasType =
        | ["function", {}]
        | ["procedure", {}]
    function getType(): TTypeAliasType | null {
        const name = $.name
        return pl.cc($d.analyseAlgorithmDefinitionName($.name.myValue), ($) => {
            if ($ === null) {
                logMessage(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Unknown type alias: ${name.myValue}`)
                return null
            } else {
                return null
            }
        })
    }

    const type = getType()

    const typeAlias = $
    const x = pl.cc($.type, ($): undefined | t.TGlobalType => {
        if (type === null) {

        } else {
            switch (type[0]) {
                case "function":
                    return pl.cc(type[1], ($) => {
                        //typeAlias.
                        convertFunctionDefinition(
                            typeAlias.type,
                            $i,
                            $d,
                        )
                        //$i.logMessage("FUNCTION", typeAlias.type.annotation)
                        return ["tbd", {}]

                    })
                case "procedure":
                    return pl.cc(type[1], ($) => {
                        convertProcedure(
                            typeAlias.type,
                            $i,
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

