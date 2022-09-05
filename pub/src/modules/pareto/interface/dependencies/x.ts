
import * as uglyStuff from "api-pareto-ugly-stuff"


export type FFirstCharacter = ($: string) => string

export type DTS2ParetoDependencies = {
    readonly firstCharacter: FFirstCharacter
    readonly startsWith: uglyStuff.FStartsWith
}