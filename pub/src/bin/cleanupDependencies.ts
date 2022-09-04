import * as uglyStuff from "res-pareto-ugly-stuff"
import * as parser from "res-dynamic-typescript-parser"

import { DCleanupDependencies } from "../imp/cleanup/imp/cleanup"

export const cleanupDependencies: DCleanupDependencies = {
    firstCharacter: ($) => {
        return uglyStuff.substr($, 0, 1)
    },
    stripQuotes: parser.stripQuotes
}