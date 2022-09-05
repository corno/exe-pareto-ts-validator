// import { TAnnotatedType, TUntypedNode } from "./generated/paretoGrammar"

// export type Handle<Annotation, RT> = (
//     parse: (
//         $: TUntypedNode<Annotation>,
//         $i: {
//             callback: ($: RT) => void,
//             reportUnexpectedRoot: ($: { root: TUntypedNode<Annotation> }) => void,
//             reportUnexpectedChild: ($: { path: string, child: TUntypedNode<Annotation>, expected: null | string[] }) => void,
//             reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
//         }
//     ) => void,
//     callback: ($: RT) => void
// ) => void

// export function doAT<Annotation, Type>(
//     $: TAnnotatedType<Annotation, Type>,
//     cb: (v: Type) => void,
// ): void {
//     cb($.content)
// }


// export type OnError<Annotation> = (
//     $: Annotation,
//     message: string,
//     details: string
// ) => void
