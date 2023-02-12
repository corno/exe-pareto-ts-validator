import * as pt from 'pareto-core-types'

export type TAlgorithmType =
    | ["function", {}]
    | ["procedure", {}]

export type TAlgorithm = {
    readonly "name": string
    readonly "type": TAlgorithmType
}

export type TImportFile =
    | ["core", {
        readonly "type":
        | ["types", {}]
        | ["lib", {}]
        | ["exe", {}]
        | ["async", {}]
        | ["resolve", {}]
        | ["candidates", {}]
        | ["state", {}]
        | ["raw", {}]
    }]
    | ["local", {
        readonly "path": string
    }]
    | ["dependency", {
        readonly "name": string
        readonly "type":
        | ["library", {}]
        | ["resource", {}]
        | ["api", {}]
    }]

export type TSplittedArray<T> = {
    readonly "last": T
    readonly "rest": pt.Array<T>
}