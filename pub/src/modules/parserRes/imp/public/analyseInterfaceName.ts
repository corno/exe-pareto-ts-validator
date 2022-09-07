import * as api from "../../interface"
import * as uglyStuff from "res-pareto-ugly-stuff"

export const analyseInterfaceName: api.AnalyseName = ($) => {

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
    if (first === "I") {
        return rest
    } else {
        return null
    }
}