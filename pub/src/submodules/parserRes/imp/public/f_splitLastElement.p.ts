// import * as pm from 'pareto-core-state'
// import * as pt from 'pareto-core-types'

// import * as api from "../../interface"


// export const f_splitLastElement: api.FSplitLastElement = <T>($: pt.Array<T>) => {
//     const builder = pm.createArrayBuilderFIXME<T>()
//     let current: null | T = null
//     $.forEach(($) => {
//         if (current !== null) {
//             builder.push(current)
//         }
//         current = $
//     })
//     if (current === null) {
//         return null
//     } else {
//         return {
//             last: current,
//             rest: builder.getArray()
//         }
//     }
// }