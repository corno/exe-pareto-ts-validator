import * as uglyStuff from "res-pareto-ugly-stuff"
import * as parser from "res-dynamic-typescript-parser"
import { DCleanupDependencies } from "../interface/dependencies/dependencies.p"

export const cleanupDependencies: DCleanupDependencies = {
    firstCharacter: ($) => {
        return uglyStuff.substr({
            value: $,
            begin: 0,
            length: 1,
        })
    },
    stripQuotes: parser.stripQuotes
}