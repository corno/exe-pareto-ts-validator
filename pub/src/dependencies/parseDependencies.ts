import * as fs from "res-pareto-filesystem"
import * as ts from "res-dynamic-typescript-parser"
import * as diff from "res-pareto-diff"
import * as path from "res-pareto-path"
import * as collation from "res-pareto-collation"
import * as uglyStuff from "res-pareto-ugly-stuff"

import { DParseTypescriptProjectDependencies } from "../imp/private/processTypescriptProject"
import { DParse2Dependencies } from "../imp/private/ParseType"

export const parse2: DParse2Dependencies = {
    parseDynamic: ts.parse,
    doUntil: uglyStuff.doUntil,
    lookAhead: uglyStuff.lookAhead,
    stringsAreEqual: diff.stringsAreEqual,
}

export const parseDependencies: DParseTypescriptProjectDependencies = {
    parse2: parse2,
    parseFilePath: path.parseFilePath,

}