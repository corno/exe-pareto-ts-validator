#!/usr/bin/env node

import * as pe from "pareto-core-exe"

import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"

import * as tsg from "../data/embeddedParetoGrammar"

import { generateInterface } from "../implementation"

pe.runProgram(
    ($, $i, $d) => {
        generateInterface(
            {
                grammar: tsg._typeScriptGrammar,
                arguments: $.arguments,
            },
            {
                isYinBeforeYang: collation.localeIsYinBeforeYang,
                createWriteStream: fs.createWriteStream,
                startAsync: $d.startAsync,
            }
        )
    }
)
