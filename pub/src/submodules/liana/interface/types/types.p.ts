import * as pt from "pareto-core-types"


export type Reference<PAnnotation, PType> = {
    readonly "name": string
    readonly "annotation": PAnnotation
    readonly "type": PType
}

export type SiblingReference<PAnnotation, PType> = {
    readonly "name": string
    readonly "annotation": PAnnotation
    readonly "type": () => PType
}

export type TTypeParameter<PAnnotation> = null

export type TGlobalType<PAnnotation> = {
    readonly "parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "details": TLocalType<PAnnotation>
}

export type TImport<PAnnotation> = string

export type TLocalType<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "optional": boolean
    readonly "type":
    | ["null", {}]
    | ["boolean", {}]
    | ["string", {}]
    | ["undefined", {}]
    | ["dictionary", {
        readonly "properties": pt.Dictionary<TLocalType<PAnnotation>>
    }]
    | ["list", {
        readonly "properties": pt.Array<TLocalType<PAnnotation>>
    }]
    | ["reference", {
        readonly "type":
        | ["parameter", {
            readonly "parameter": Reference<PAnnotation, TTypeParameter<PAnnotation>>
        }]
        | ["type", {
            readonly "global type": SiblingReference<PAnnotation, TGlobalType<PAnnotation>>
            readonly "arguments": pt.Dictionary<TLocalType<PAnnotation>>
        }]
    }]
    | ["tagged union", {
        readonly "options": pt.Dictionary<TLocalType<PAnnotation>>
    }]
}

export type TSchema<PAnnotation> = {
    readonly "global types": pt.Dictionary<TGlobalType<PAnnotation>>
    readonly "root": TLocalType<PAnnotation>
}