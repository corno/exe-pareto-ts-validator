import * as pt from "pareto-core-types"

export type TLocalType =
    | ["tagged union", {}]
    | ["string keyword", {}]
    | ["number keyword", {}]
    | ["boolean keyword", {}]
    | ["optional", TLocalType]
    | ["reference", {
        //steps
        //Type
    }]
    | ["tbd", {}]

export type TDependencies = pt.Dictionary<TDependency>

export type TLocalInterface =
    | ["method", {}]
    | ["group", pt.Dictionary<TLocalInterface>]
    | ["reference", {
        //steps
        //Type
    }]
    | ["tbd", {}]


export type TFunction =
    | ["tbdf", {}]



export type TProcedure =
    | ["tbdp", {}]


export type TGlobalType = {
    readonly "type"?: TLocalType
}


export type TAlgorithm = {
    readonly "foo": boolean
}

export type TDependency = {
    readonly "bar": boolean
}

export type TGlobalInterface = {
    readonly "type"?: TLocalInterface
}

export type TTypeSignature =
    | ["property", {
        readonly "type": TLocalType
    }]
