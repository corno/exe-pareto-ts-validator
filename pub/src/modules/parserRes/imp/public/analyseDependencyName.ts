import * as api from "../../interface"
import * as uglyStuff from "res-pareto-ugly-stuff"

export const analyseDependencyName: api.AnalyseName = ($) => {

    const first = uglyStuff.substr({
        value: $,
        begin: 0,
        length: 1,
    })
    const rest = uglyStuff.substr({
        value: $,
        begin: 0,
        length: 1,
    })
    if (first === "D") {
        return rest
    } else {
        return null
    }
}