import * as pl from "pareto-core-lib"
import * as p2 from "pareto-core-tostring"

import { ParseError } from "./processTypescriptProject"

import * as ap from "lib-analyse-path"

export function createParseErrorMessage($: ParseError): string {

    switch ($[0]) {
        case "dynamic parser":
            return pl.cc($[1], ($) => {
               switch ($[0]) {
                   case "tsconfg.json does not exist": 
                       return pl.cc($[1], ($) => {
                           return "tsconfig.json does not exist"
                       })
                   default: return pl.au($[0])
               }
            })
        case "file path":
            return pl.cc($[1], ($) => {
                return `${p2.joinNestedStrings($.path)}: ${ap.createAnnotatedPathErrorMessage($.error)}`
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
                return `${$.file.absolutePath}:${$.token.details.location.line}:${$.token.details.location.column}: unexpected token '${$.token.kindName}', expected: ${$.expected}`
            })
        default: return pl.au($[0])
    }
}
