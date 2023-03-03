import * as fp from "lib-fountain-pen"
import { IBlock } from "lib-fountain-pen"

export type IWriter = {
    createDirectory: ($: string, $c: ($i: IWriter) => void) => void
    createFile: ($: string, $c: ($i: IBlock) => void) => void
}