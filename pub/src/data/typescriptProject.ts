import * as pw from "pareto-core-raw"

import * as ap from "lib-analyse-path"

export const _typescriptProject: ap.TDirectory = {
    'type': ["type", {
        'nodesX': pw.wrapRawDictionary({
            "src": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodesX': pw.wrapRawDictionary({
                            "bin": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensionsX': pw.wrapRawArray([
                                            `ts`,
                                        ]),
                                        'recursive': false
                                    }]
                
                                }]
                            },
                            "data": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensionsX': pw.wrapRawArray([
                                            `ts`,
                                        ]),
                                        'recursive': false
                                    }]
                
                                }]
                            },
                            "dependencies": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensionsX': pw.wrapRawArray([
                                            `ts`,
                                        ]),
                                        'recursive': false
                                    }]
                
                                }]
                            },
                            "index.ts": {
                                'type': ["file", {}]
                            },
                            "_globals.ts": {
                                'type': ["file", {}]
                            },
                            "interface": {
                                'type': ["directory", {
                                    'type': ["type", {
                                        'nodesX': pw.wrapRawDictionary({
                                            "types": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "interfaces": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "algorithms": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "dependencies": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "index.ts": {
                                                'type': ["file", {}]
                                            },
                                        })
                                    }]
                
                                }]
                            },
                            "imp": {
                                'type': ["directory", {
                                    'type': ["type", {
                                        'nodesX': pw.wrapRawDictionary({
                                            "modules": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "public": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "private": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "types": {
                                                'type': ["directory", {
                                                    'type': ["files dictionary", {
                                                        'allow missing extension': false,
                                                        'extensionsX': pw.wrapRawArray([
                                                            `ts`,
                                                        ]),
                                                        'recursive': true
                                                    }]
                                
                                                }]
                                            },
                                            "index.ts": {
                                                'type': ["file", {}]
                                            },
                                        })
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