#!/usr/bin/env node

import * as pe from "pareto-core-exe"

import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"

import * as tsg from "../data/embeddedParetoGrammar"
import { generateImplementation } from "../imp/public/generateImplementation"


pe.runProgram(
    ($, $i, $d) => {
        generateImplementation(
            {
                grammar: tsg._typeScriptGrammar,
                arguments: $.arguments,
            },
            {
                isYinBeforeYang: collation.localeIsYinBeforeYang,
                createWriteStream: fs.createWriteStream,
                startAsync: $d.startAsync
            }
        )
    }
)
