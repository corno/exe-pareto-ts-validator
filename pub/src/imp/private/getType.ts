import { TProjectType } from "../public/processTypescriptProjectsInProject"

export type FFirst3Characters = ($: string) => string

export function getType(
    $: string,
    $d: {
        first3Characters: FFirst3Characters
    },
): TProjectType {
    const substr = $d.first3Characters($)
    switch (substr) {
        case "exe": return ["executable", {}]
        case "res": return ["resource", {}]
        case "lib": return ["library", {}]
        case "api": return ["api", {}]
        default: return ["unknown", {}]
    }
}