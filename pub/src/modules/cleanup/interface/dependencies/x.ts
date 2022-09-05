import * as parser from "api-dynamic-typescript-parser"

export type FFirstCharacter = ($: string) => string

export type DCleanupDependencies = {
    readonly firstCharacter: FFirstCharacter
    readonly stripQuotes: parser.FStripQuotes
}
