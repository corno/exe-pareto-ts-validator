import * as pt from "pareto-core-types"

export type TAlgorithmType =
| ["function", {}]
| ["procedure", {}]

export type TAlgorithm = {
    name: string
    type: TAlgorithmType
}

export type TImportFile =
| ["core", {
    type:
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
    path: string
}]
| ["dependency", {
    name: string
    type:
    | ["library", {}]
    | ["resource", {}]
    | ["api", {}]
}]

export type TSplittedArray<T> = {
    last: T
    rest: pt.Array<T>
}