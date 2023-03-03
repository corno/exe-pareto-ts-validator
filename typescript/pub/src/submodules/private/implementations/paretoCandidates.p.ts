import * as pt from 'pareto-core-types'
// import * as pm from 'pareto-core-state'

// export function unsafeToDictionary<T, NT>(
//     array: pt.Array<T>,
//     callback: ($: T) => { key: string, value: NT }
// ): pt.Dictionary<NT> {
//     const builder = pc.createUnsafeDictionaryBuilder<NT>()
//     array.forEach(($) => {
//         const res = callback($)
//         builder.add(res.key, res.value)

//     })
//     return builder.getDictionary()
// }

// export function toDictionary<T, NT>(
//     array: pt.Array<T>,
//     callback: ($: T) => { key: string, value: NT },
//     duplicateStrategy:
//         | ["ignore", {}]
//         | ["overwrite", {}],
//     onDuplicate: (key: string) => void,

// ): pt.Dictionary<NT> {
//     const builder = pm.createDictionaryBuilderFIXME<NT>(
//         duplicateStrategy,
//         onDuplicate,
//     )
//     array.forEach(($) => {
//         const res = callback($)
//         builder.add(res.key, res.value)

//     })
//     return builder.getDictionary()
// }




// // function allElements<T>(
// //     $: pt.Array<T>,
// //     callback: ($: T) => boolean
// // ) {
// //     return $.reduce<boolean>(true, (current, $) => callback($) && current)
// // }
// // function anyElement<T>(
// //     $: pt.Array<T>,
// //     callback: ($: T) => boolean
// // ) {
// //     return $.reduce<boolean>(false, (current, $) => callback($) || current)
// // }

// // function anyEntry<T>(
// //     $: pt.Dictionary<T>,
// //     callback: ($: T) => boolean
// // ): boolean {
// //     return $.reduce<boolean>(false, (current, $) => callback($) || current)
// // }

