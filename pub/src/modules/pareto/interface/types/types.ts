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
    | ["tbd", {}]


export type TGlobalType = {
    type?: TLocalType
}


export type TAlgorithm = {
    foo: boolean
}

export type TDependency = {
    bar: boolean
}

export type TGlobalInterface = {
    type?: TLocalInterface
}

export type TTypeSignature =
    | ["property", {
        readonly "type": TLocalType
    }]
