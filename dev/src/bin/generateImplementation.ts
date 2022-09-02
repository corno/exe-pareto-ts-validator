#!/usr/bin/env node

import * as pe from "pareto-core-exe"

import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"

import * as tsg from "../data/paretoGrammar"
import { createGenerateImplementationMain } from "../imp/createGenerateImplementationMain"


pe.runProgram(

    createGenerateImplementationMain(
        {
            grammar: tsg._typeScriptGrammar
        },
        {
            isYinBeforeYang: collation.localeIsYinBeforeYang,
            createWriteStream: fs.createWriteStream,
        }
    )
)
