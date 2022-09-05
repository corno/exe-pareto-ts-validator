import * as pw from "pareto-core-raw"

import * as ap from "lib-analyse-path"


export const _recursiveDir: ap.TNode = {
    'type': ["directory", {
        'type': ["files dictionary", {
            'allow missing extension': false,
            'extensionsX': pw.wrapRawArray([
                `ts`,
            ]),
            'recursive': true
        }]

    }]
}
export const _flatDir: ap.TNode = {
    'type': ["directory", {
        'type': ["files dictionary", {
            'allow missing extension': false,
            'extensionsX': pw.wrapRawArray([
                `ts`,
            ]),
            'recursive': false
        }]

    }]
}

export const _interface: ap.TNode = {
    'type': ["directory", {
        'type': ["type", {
            'nodesX': pw.wrapRawDictionary({
                "types": _recursiveDir,
                "interfaces": _flatDir,
                "algorithms": _flatDir,
                "dependencies": _flatDir,
                "index.ts": {
                    'type': ["file", {}]
                },
            })
        }]

    }]
}

export const _imp: ap.TNode = {
    'type': ["directory", {
        'type': ["type", {
            'nodesX': pw.wrapRawDictionary({
                "public": _flatDir,
                "private": _recursiveDir,
                "types": _flatDir,
                "index.ts": {
                    'type': ["file", {}]
                },
            })
        }]
    }]
}

export const _typescriptProject: ap.TDirectory = {
    'type': ["type", {
        'nodesX': pw.wrapRawDictionary({
            "src": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodesX': pw.wrapRawDictionary({
                            "dependencies": _flatDir,
                            "index.ts": {
                                'type': ["file", {}]
                            },
                            "interface": _interface,
                            "imp": _imp,

                            "_globals.ts": {
                                'type': ["file", {}]
                            },
                            "bin": _flatDir,
                            "data": _flatDir,
                            "modules": {
                                'type': ["directory", {
                                    'type': ["directory dictionary", {
                                        'definition': {
                                            'type': ["type", {
                                                'nodesX': pw.wrapRawDictionary({
                                                    "dependencies": _flatDir,
                                                    "index.ts": {
                                                        'type': ["file", {}]
                                                    },
                                                    "interface": _interface,
                                                    "imp": _imp,
                                                })
                                            }]
                                        }
                                    }]
            
                                }]
                            },
                        })
                    }]

                }]
            },
        })
    }]
}