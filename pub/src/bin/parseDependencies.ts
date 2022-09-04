import * as fs from "res-pareto-filesystem"
import * as ts from "res-dynamic-typescript-parser"
import * as diff from "res-pareto-diff"
import * as path from "res-pareto-path"
import * as collation from "res-pareto-collation"
import * as uglyStuff from "res-pareto-ugly-stuff"

import { DParseTypescriptProjectDependencies } from "../imp/processTypescriptProject"

export const parseDependencies: DParseTypescriptProjectDependencies = {
    parseDynamic: ts.parse,
    doUntil: uglyStuff.doUntil,
    lookAhead: uglyStuff.lookAhead,
    stringsAreEqual: (a, b) => diff.stringsAreEqual({a: a, b: b}),
    parseFilePath: path.parseFilePath,

}