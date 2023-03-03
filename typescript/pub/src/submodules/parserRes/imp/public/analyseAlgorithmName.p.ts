// import * as api from "../../interface"
// import * as uglyStuff from "res-pareto-ugly-stuff"

// export const f_analyseAlgorithmName: api.FAnalyseAlgorithmName = ($) => {

//     const first = uglyStuff.substr({
//         value: $,
//         begin: 0,
//         length: 2,
//     })
//     const rest = uglyStuff.substr({
//         value: $,
//         begin: 2,
//         length: uglyStuff.stringLength($) - 2,
//     })
//     if (first === "f_") {
//         return {
//             type: ["function", {}],
//             name: rest
//         }
//     } else {
//         if (first === "p_") {
//             return {
//                 type: ["procedure", {}],
//                 name: rest
//             }
//         } else {
//             return null
//         }
//     }
// }