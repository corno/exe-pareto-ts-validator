// #!/usr/bin/env node

import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as dyn from "res-dynamic-typescript-parser"
import * as exeLib from "lib-pareto-exe"
import * as uglyStuff from "res-pareto-ugly-stuff"

import { parse } from "../imp/parse"

pe.runProgram(($, $i, $d) => {
    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {
                pl.panic("args")
            },
            callback: ($) => {
                $d.startAsync(

                    parse(
                        {
                            tsConfigPath: [$, "pub", "tsconfig.json"],
                        },
                        {
                            reportMissingToken: () => {
                                pl.logDebugMessage("missing token")
                            },
                            reportUnexpectedToken: ($) => {

                                pl.logDebugMessage(`${$.file}:${$.details.line}:${$.details.column}: unexpected token '${$.kindName}'`)
                            },
                            onFile: ($) => {
                                pl.logDebugMessage(`FILE: ${$.path}`)
                            },
                            onEnd: () => {

                            }

                        },
                        {
                            parseDynamic: dyn.parse,
                            doUntil: uglyStuff.doUntil,
                            lookAhead: uglyStuff.lookAhead,
                        }
                    )
                )
            }
        }
    )
})

// import * as pf from "pareto-filesystem-lib"
// import * as pl from "pareto-core-lib"

// import * as path from "path"
// import { TUntypedNode, TAnnotatedString } from "../../generated/paretoGrammar"
// import { _typescriptFileStructure } from "../../data/paretoProject"
// import { analyseFile } from "../implementations/analyseFile"
// import * as ap from "analyse-path"

// import { doInterface } from "../grammars/interface"
// import { doData } from "../grammars/data"
// import { doCreator } from "../grammars/creator"
// import { doRootIndex } from "../grammars/rootIndex"
// import { doProcedure } from "../grammars/procedure"
// import { doTypeFile } from "../grammars/type"
// import { TOut } from "../ParetoTypes"

// pr.runProgram(
//     ($) => {
//         let foundError = false
//         function logError(message: string) {
//             foundError = true
//             pr.logError(message)
//         }
//         const tsconfigPath = $.argument
//         if (tsconfigPath === undefined) {
//             logError("missing tsconfig path")
//             pr.processExit(1)
//         } else {
//             const out: TOut<tsmorph.Node> = {
//                 typeAliases: {}
//             }

//             pf.wrapDirectory(
//                 {
//                     rootDirectory: path.dirname(tsconfigPath),
//                 },
//                 {
//                     callback: ($i) => {
//                         const project = new tsmorph.Project({})
//                         project.addSourceFilesFromTsConfig(tsconfigPath)
//                         pr.log(tsconfigPath)
//                         project.getSourceFiles().forEach(($) => {
//                             const fullFilePath = $.getFilePath()
//                             const filePath = path.relative(path.dirname(tsconfigPath), $.getFilePath())
//                             const parsedPath = ap.parseFilePath(filePath)
//                             const res = ap.analysePath(
//                                 _typescriptFileStructure,
//                                 parsedPath,
//                             )
//                             function startsWith(
//                                 $: {
//                                     string: TAnnotatedString<tsmorph.Node>,
//                                     expected: string
//                                 }
//                             ): void {
//                                 if (!$.string.value.startsWith($.expected)) {
//                                     onError($.string.annotation, `invalid name`, `must start wih '${$.expected}'`)
//                                 }
//                             }
//                             function onError(
//                                 $: tsmorph.Node,
//                                 message: string,
//                                 details: string
//                             ) {
//                                 const red = "\x1b[31m"
//                                 //const green = "\x1b[32m"
//                                 const yellow = "\x1b[33m"
//                                 const cyan = "\x1b[36m"
//                                 const reset = "\x1b[0m"
//                                 const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
//                                 logError(`${cyan}${fullFilePath}${reset}:${yellow}${lp.line}:${lp.column}${reset} - ${red}error${reset} ${message}`)
//                                 logError(`    ${details}`)
//                             }
//                             function unexpectedAT(annotation: tsmorph.Node) {
//                                 onError(annotation, `unexpected type`, `X`)
//                             }
//                             function handle<RT>(
//                                 parse: (
//                                     $: TUntypedNode<tsmorph.Node>,
//                                     $i: {
//                                         callback: ($: RT) => void,
//                                         reportUnexpectedRoot: ($: { root: TUntypedNode<tsmorph.Node>, }) => void,
//                                         reportUnexpectedChild: ($: { path: string, child: TUntypedNode<tsmorph.Node>, expected: null | string[] }) => void,
//                                         reportMissingToken: ($: { parentAnnotation: tsmorph.Node, path: string, kindNameOptions: string[], }) => void,
//                                     }
//                                 ) => void,
//                                 callback: ($: RT) => void
//                             ) {
//                                 function wrap(
//                                     $: tsmorph.Node
//                                 ): TUntypedNode<tsmorph.Node> {
//                                     return {
//                                         kindName: $.getKindName(),
//                                         value: $.getText(),
//                                         annotation: $,
//                                         children: {
//                                             forEach: (callback) => {
//                                                 $.forEachChild(($) => {
//                                                     callback(wrap($))
//                                                 })
//                                             },
//                                         }
//                                     }
//                                 }
//                                 parse(
//                                     wrap($),
//                                     {
//                                         callback: ($) => {
//                                             callback($)
//                                         },
//                                         reportUnexpectedRoot: ($) => {
//                                             onError($.root.annotation, "unexpected root", "")
//                                         },
//                                         reportUnexpectedChild: ($) => {
//                                             onError($.child.annotation, `unexpected child`, `@ ${$.path}, found ${$.child.kindName}, expected ${$.expected === null ? "nothing" : $.expected.map(($) => `'${$}'`).join(" or ")}`)
//                                         },
//                                         reportMissingToken: ($) => {
//                                             onError($.parentAnnotation, `missing token`, `@ ${$.path}, expected ${$.kindNameOptions.map(($) => `'${$}'`).join(" or ")}`)
//                                         }
//                                     }
//                                 )
//                             }
//                             function doEsc() {
//                                 $.forEachChild(($) => {
//                                     const allowed: { [key: string]: () => void } = {
//                                         "EndOfFileToken": () => { },
//                                         "ExportDeclaration": () => { },
//                                         "ExpressionStatement": () => {
//                                             if ($.getChildCount() !== 1) {
//                                                 onError($, `UNEXPECTED EXPRESSION STATEMENT FORMAT`, `IN ESC: ${$.getKindName()}`)
//                                             } else {
//                                                 pl.cc($.getChildAtIndex(0), ($) => {
//                                                     if ($.getKindName() !== "CallExpression") {
//                                                         onError($, `UNEXECTED EXPRESSION STATEMENT`, `ESC: ${$.getKindName()}`)
//                                                     }
//                                                 })
//                                             }
//                                         },
//                                         "FunctionDeclaration": () => { },
//                                         "ImportDeclaration": () => { },
//                                     }
//                                     const entry = allowed[$.getKindName()]
//                                     if (entry === undefined) {
//                                         onError($, `UNEXPECTED GLOBAL`, `ESC: ${$.getKindName()}`)
//                                     } else {
//                                         entry()
//                                     }
//                                 })
//                             }
//                             function doBin() {
//                                 $.forEachChild(($) => {
//                                     const allowed: { [key: string]: () => void } = {
//                                         "EndOfFileToken": () => { },
//                                         "ExportDeclaration": () => { },
//                                         "ExpressionStatement": () => {
//                                             if ($.getChildCount() !== 1) {
//                                                 onError($, `UNEXPECTED EXPRESSION STATEMENT FORMAT`, `BIN: ${$.getKindName()}`)
//                                             } else {
//                                                 pl.cc($.getChildAtIndex(0), ($) => {
//                                                     if ($.getKindName() !== "CallExpression") {
//                                                         onError($, `UNEXECTED EXPRESSION STATEMENT`, `BIN: ${$.getKindName()}`)
//                                                     }
//                                                 })
//                                             }
//                                         },
//                                         "FunctionDeclaration": () => { },
//                                         "ImportDeclaration": () => { },
//                                     }
//                                     const entry = allowed[$.getKindName()]
//                                     if (entry === undefined) {
//                                         onError($, `UNEXPECTED GLOBAL`, `ESC: ${$.getKindName()}`)
//                                     } else {
//                                         entry()
//                                     }
//                                 })
//                             }
//                             const pathPatterns: { [key: string]: () => void } = {
//                                 "/src/data/*.ts": doData(handle, onError),
//                                 "/src/esc/**/*.ts": doEsc,
//                                 "/src/procedures/*.ts": doProcedure(handle, onError),
//                                 "/src/bin/*.ts": doBin,
//                                 "/src/index.ts": doRootIndex(onError),
//                                 "/src/interface/index.ts": doRootIndex(onError),
//                                 "/src/interface/interfaces/*.ts": doInterface(handle, onError),
//                                 "/src/interface/types/*.ts": doTypeFile(handle, out, onError),
//                                 "/src/interface/creators/*.ts": doCreator(handle, onError),
//                                 "/src/modules/*/esc/**/*.ts": doEsc,
//                                 "/src/modules/*/index.ts": doRootIndex(onError),
//                                 "/src/modules/*/interface/index.ts": doRootIndex(onError),
//                                 "/src/modules/*/interface/interfaces/*.ts": doInterface(handle, onError),
//                                 "/src/modules/*/interface/types/*.ts": doTypeFile(handle, out, onError),
//                                 "/src/generated/*/esc/**/*.ts": doEsc,
//                                 "/src/generated/*/index.ts": doRootIndex(onError),
//                                 "/src/generated/*/interface/index.ts": doRootIndex(onError),
//                                 "/src/generated/*/interface/interfaces/*.ts": doInterface(handle, onError),
//                                 "/src/generated/*/interface/types/*.ts": doTypeFile(handle, out, onError),
//                                 "/src/temp/*.ts": doData(handle, onError),

//                             }
//                             if (pathPatterns[res.pathPattern] === undefined) {
//                                 logError(`unknown path pattern: ${res.pathPattern} @ ${fullFilePath}`)
//                             } else {
//                                 pathPatterns[res.pathPattern]()
//                             }
//                             analyseFile(
//                                 {
//                                     filePath: filePath,
//                                     fileSystemStructure: _typescriptFileStructure,
//                                 },
//                                 {
//                                     contextDir: $i,
//                                     onError: ($) => {
//                                         logError($)
//                                     },
//                                     log: ($) => {
//                                         pr.log($)
//                                     },
//                                 }
//                             )
//                         })
//                     },
//                     onError: ($i) => {
//                         logError(pf.createFSErrorMessage($i))
//                     },
//                     onEnd: () => {
//                         console.error(JSON.stringify(out))
//                         console.log("!!!!!!")
//                         if (foundError) {
//                             console.log("2!!!!!!")
//                             pr.processExit(1)
//                         }
//                     },
//                 }
//             )
//         }
//     }
// )