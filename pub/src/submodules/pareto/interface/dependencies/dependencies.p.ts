import * as pt from "pareto-core-types"
import { TGlobalInterface, TGlobalType, TImport, TTypeParameter, TDependencyDefinition, TFunctionDefinition } from "../types/types.p"


export type PEnrichedForEach = <T> (
    $: pt.Dictionary<T>,
    $i: {
        onBegin: () => void
        onEnd: () => void
        onEntry: ($: {
            key: string
            value: T,
            isFirst: boolean
        }) => void
    }
) => void

export type TKeyValuePair<T> = {
    key: string,
    value: T
}

export type DDependencies<PAnnotation> = {
    escapeType: ($: TKeyValuePair<TGlobalType<PAnnotation>>) => string
    escapeImportedType: ($: {
        module: TImport<PAnnotation>,
        type: TKeyValuePair<TGlobalType<PAnnotation>>,
    }) => string
    escapeTypeParameter: ($: TKeyValuePair<TTypeParameter<PAnnotation>>) => string
    escapeInterface: ($: TKeyValuePair<TGlobalInterface<PAnnotation>>) => string
    escapeImportedInterface: ($: {
        interface: TKeyValuePair<TGlobalInterface<PAnnotation>>,
        module ?: TImport<PAnnotation>,
    }) => string
    escapeDependencyDefinition: ($: TKeyValuePair<TDependencyDefinition<PAnnotation>>) => string

    escapeImportedFunction: ($: {
        interface: TKeyValuePair<TFunctionDefinition<PAnnotation>>,
        module: TImport<PAnnotation>,
    }) => string
    enrichedForEach: PEnrichedForEach,
    sortedForEach: <T>($: pt.Dictionary<T>, $i: ($: {
        key: string
        value: T
    }) => void) => void
}