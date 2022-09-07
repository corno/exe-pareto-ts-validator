import * as pt from "pareto-core-types"


import { TAlgorithm, TImportFile, TSplittedArray } from "../types/types";

export type AnalyseAlgorithmName = ($: string) => null | TAlgorithm

export type AnalyseName = ($: string) => null | string

export type AnalyseImportFile = ($: string) => null | TImportFile

export type FSplitLastElement= <T>($: pt.Array<T>) => null | TSplittedArray<T>
