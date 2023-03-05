import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'parameters': d({}),
    'types': d({
    }),
    'builders': d({}),
    'interfaces': d({
    }),
    'functions': d({
    }),
}