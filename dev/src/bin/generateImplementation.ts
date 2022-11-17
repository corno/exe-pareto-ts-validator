#!/usr/bin/env node

import * as pe from "pareto-core-exe"

import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"

import * as tsg from "../data/embeddedParetoGrammar"
import { generateImplementation } from "../implementation"


pe.runProgram(
    ($, $i, $a) => {
        generateImplementation(
            {
                grammar: tsg._typeScriptGrammar,
                arguments: $.arguments,
            },
            {
                isYinBeforeYang: collation.fLocaleIsYinBeforeYang,
                createWriteStream: fs.f_createWriteStream,
                startAsync: $a
            }
        )
    }
)
