// import * as pt from "pareto-core-types"

// import * as ts from "api-dynamic-typescript-parser"
// import * as fs from "api-pareto-filesystem"
// import * as diff from "api-pareto-diff"
// import * as uglyStuff from "api-pareto-ugly-stuff"
// import * as path from "api-pareto-path"


// export type PEnrichedForEach = <T> (
//     $: pt.Array<T>,
//     $i: {
//         onBegin: () => void
//         onEnd: () => void
//         onEntry: ($: {
//             entry: T,
//             isFirst: boolean
//         }) => void
//     }
// ) => void

// export type DSerializeTypeScriptSubset = {
//     readonly "forEach": PEnrichedForEach
//     readonly "createWriteStream": fs.XCreateWriteStream
// }

// export type DParse2Dependencies = {
//     parseDynamic: ts.XParse
//     doUntil: uglyStuff.XDoUntil,
//     lookAhead: uglyStuff.XLookAhead,
//     stringsAreEqual: diff.FStringsAreEqual
// }

// export type DParseTypescriptProjectDependencies = {
//     readonly parse2: DParse2Dependencies
//     readonly parseFilePath: path.ParseFilePath
// }
