import * as pl from 'pareto-core-lib'

import * as api from "../api"

import { $ as project } from "../../../data/project.data"
import * as mgta from "lib-generate-typesafe-ast"

export const $$: api.CgenerateInterface = ($) => {
    mgta.$a.generateImplementation({
        'generation': {
            'grammar': grammar,
            'pathToInterface': "",
        },
        'rootPath': xxx
    })

}