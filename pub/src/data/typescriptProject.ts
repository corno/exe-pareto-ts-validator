import * as ap from "lib-analyse-path"

export const _typescriptProject: ap.TDirectory = {
    'type': ["type", {
        'nodes': {
            "src": {
                'type': ["directory", {
                    'type': ["type", {
                        'nodes': {
                            "bin": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensions': ([
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
                                        'extensions': ([
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
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensions': ([
                                            `ts`,
                                        ]),
                                        'recursive': true
                                    }]
                
                                }]
                            },
                            "imp": {
                                'type': ["directory", {
                                    'type': ["files dictionary", {
                                        'allow missing extension': false,
                                        'extensions': ([
                                            `ts`,
                                        ]),
                                        'recursive': true
                                    }]
                
                                }]
                            },
                        }
                    }]

                }]
            },
        }
    }]
}