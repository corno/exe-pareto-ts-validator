import * as uglyStuff from "api-pareto-ugly-stuff"
import { ProjectType } from "./processTypescriptProjectsInProject"


export function getType(
    $: string,
    $d: {
        substr: uglyStuff.SubStr
    },
): ProjectType {
    const substr = $d.substr($, 0, 3)
    switch (substr) {
        case "exe": return ["executable", {}]
        case "res": return ["resource", {}]
        case "lib": return ["library", {}]
        case "api": return ["api", {}]
        default: return ["unknown", {}]
    }
}