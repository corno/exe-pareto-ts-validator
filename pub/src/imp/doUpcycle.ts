
import * as pl from "pareto-core-lib"
import * as p2 from "pareto-core-tostring"

import * as uast from "api-untyped-ast"
import * as fs from "api-pareto-filesystem"


import { DCleanupDependencies } from "./cleanup/imp/cleanup"

import { ts2pareto } from "./pareto/imp/ts2pareto"
import { TSourceFile } from "./cleanup/types"

export function doUpcycle(
    $: {
        path: fs.Path
        data: TSourceFile<uast.TDetails>
    },
    $d: DCleanupDependencies
) {

    const config = $
    ts2pareto(
        $.data,
        {
            logMessage: ($, $2) => {
                pl.logDebugMessage(`${p2.joinNestedStrings(config.path, "/")}:${$2.location.line}:${$2.location.column}  ${$} `)
            }
        },
        {
            firstCharacter: $d.firstCharacter
        }
    )


}