import * as uglyStuff from "res-pareto-ugly-stuff"

import { DTS2ParetoDependencies } from "../imp/modules/pareto/imp/private/convertGlobalType";

export const ts2ParetoDependencies: DTS2ParetoDependencies = {
    startsWith: uglyStuff.startsWIth,
    firstCharacter: ($) => uglyStuff.substr({
        value: $,
        begin: 0,
        length: 1,
    })
}