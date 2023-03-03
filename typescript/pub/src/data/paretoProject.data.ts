import * as pw from 'pareto-core-raw'

import * as ap from "lib-analyse-path"

export const _dataDirectory: ap.TNode = {
    'type': ["directory", {
        'type': ["files dictionary", {
            'allow missing extension': true,
            'extensions': pw.wrapRawDictionary({
                "astn-schema": null,
                "astn": null,
                "csv": null,
                "html": null,
                "json": null,
                "sh": null,
                "test": null,
                "ts": null,
                "txt": null,
            }),
            'recursive': true
        }]
    }],
}

export const _typescriptDirectory: ap.TNode = {
    'type': ["directory", {
        'type': ["type", {
            'nodes': pw.wrapRawDictionary({
                "data": _dataDirectory,
                "package.json": {
                    'type': ["file", null]
                },
                "package-lock.json": {
                    'type': ["file", null]
                },
                "src": {
                    'type': ["directory", {
                        'type': ["files dictionary", {
                            'allow missing extension': false,
                            'extensions': pw.wrapRawDictionary({
                                "ts": null,
                            }),
                            'recursive': true
                        }]

                    }],
                },
                "tsconfig.json": {
                    'type': ["file", null]
                },
            })
        }]
    }]
}
export const _paretoProject: ap.TDirectory = {
    'type': ["type", {
        'nodes': pw.wrapRawDictionary({
            ".gitignore": {
                'type': ["file", null]
            },
            "custom scripts": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodes': pw.wrapRawDictionary({
                            "package.json": {
                                'type': ["file", null]
                            },
                        })
                    }]
                }]
            },
            "dev": _typescriptDirectory,
            "pareto": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodes': pw.wrapRawDictionary({
                            "initialize.sh": {
                                'type': ["file", null]
                            },
                            "package.json": {
                                'type': ["file", null]
                            },
                            "package-lock.json": {
                                'type': ["file", null]
                            },
                            "scripts": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensions': pw.wrapRawDictionary({
                                            "sh": null,
                                        }),
                                        'recursive': false
                                    }]
                                }],
                            }
                        })
                    }]
                }],
            },
            "pub": _typescriptDirectory,
            "README.md": {
                'type': ["file", null]
            },
            "test": _typescriptDirectory,
            "tmp": _dataDirectory,
        })
    }]
}