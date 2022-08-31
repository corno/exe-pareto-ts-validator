import * as ap from "lib-analyse-path"

export const _dataDirectory: ap.TNode = {
    'type': ["directory", {
        'type': ["files dictionary", {
            'allow missing extension': true,
            'extensions': ([
                `astn-schema`,
                `astn`,
                `csv`,
                `html`,
                `json`,
                `sh`,
                `test`,
                `ts`,
                `txt`,
            ]),
            'recursive': true
        }]
    }],
}

export const _typescriptDirectory: ap.TNode = {
    'type': ["directory", {
        'type': ["type", {
            'nodes': {
                "data": _dataDirectory,
                "package.json": {
                    'type': ["file", {}]
                },
                "package-lock.json": {
                    'type': ["file", {}]
                },
                "src": {
                    'type': ["directory", {
                        'type': ["files dictionary", {
                            'allow missing extension': false,
                            'extensions': ([
                                `ts`,
                            ]),
                            'recursive': true
                        }]
                        
                    }],
                },
                "tsconfig.json": {
                    'type': ["file", {}]
                },
            }
        }]
    }]
}
export const _paretoProject: ap.TDirectory = {
    'type': ["type", {
        'nodes': {
            ".gitignore": {
                'type': ["file", {}]
            },
            "custom scripts": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodes': {
                            "package.json": {
                                'type': ["file", {}]
                            },
                        }
                    }]
                }]
            },
            "dev": _typescriptDirectory,
            "pareto": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodes': {
                            "package.json": {
                                'type': ["file", {}]
                            },
                            "package-lock.json": {
                                'type': ["file", {}]
                            },
                            "scripts": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensions': ([
                                            `sh`,
                                        ]),
                                        'recursive': false
                                    }]
                                }],
                            }
                        }
                    }]
                }],
            },
            "pub": _typescriptDirectory,
            "README.md": {
                'type': ["file", {}]
            },
            "test": _typescriptDirectory,
            "tmp": _dataDirectory,
        }
    }]
}