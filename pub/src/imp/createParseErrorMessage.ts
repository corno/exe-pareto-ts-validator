import * as pl from "pareto-core-lib"

import { ParseError } from "./processTypescriptProject"

export function createParseErrorMessage($: ParseError): string {

    switch ($[0]) {
        case "dynamic parser":
            return pl.cc($[1], ($) => {
                return "DP"
            })
        case "file path":
            return pl.cc($[1], ($) => {
                return "FP"

            })
        case "missing token":
            return pl.cc($[1], ($) => {
                return "MT"

            })
        case "pattern":
            return pl.cc($[1], ($) => {
                return "P"

            })
        case "unexpected token":
            return pl.cc($[1], ($) => {
                return "UT"
                //return `${$.file.absolutePath}:${$.token.details.location.line}:${$.token.details.location.column}: unexpected token '${$.token.kindName}', expected: ${$.expected}`)e("UT"

            })
        default: return pl.au($[0])
    }
}
