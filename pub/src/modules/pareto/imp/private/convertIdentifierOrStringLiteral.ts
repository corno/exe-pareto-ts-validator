import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface/types/types"
import * as t from "../../interface/types/types"

export function convertIdentifierOrStringLiteral<Annotation>(
    $: ts.TIdentifierOrStringLiteral<Annotation>
): string {
    switch ($[0]) {
        case "identifier":
            return pl.cc($[1], ($) => {
                return $.myValue
            })
        case "stringLiteral":
            return pl.cc($[1], ($) => {
                return $.strippedValue
            })
        default: return pl.au($[0])
    }
}
