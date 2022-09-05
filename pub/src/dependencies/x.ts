

import * as ts from "api-dynamic-typescript-parser"
import * as diff from "api-pareto-diff"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as path from "api-pareto-path"

export type DParse2Dependencies = {
    parseDynamic: ts.XParse
    doUntil: uglyStuff.XDoUntil,
    lookAhead: uglyStuff.XLookAhead,
    stringsAreEqual: diff.StringsAreEqual
}

export type DParseTypescriptProjectDependencies = {
    readonly parse2: DParse2Dependencies
    readonly parseFilePath: path.ParseFilePath
}
