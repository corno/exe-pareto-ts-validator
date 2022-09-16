import * as pt from "pareto-core-types"


import { TAlgorithm, TImportFile, TSplittedArray } from "../types/types";

export type FAnalyseAlgorithmName = ($: string) => null | TAlgorithm

export type FAnalyseName = ($: string) => null | string

export type FAnalyseImportFile = ($: string) => null | TImportFile

export type FSplitLastElement= <T>($: pt.Array<T>) => null | TSplittedArray<T>
