import { ILog } from "../types/Log"

export type ILogger = ($: string) => undefined

export function createLogger<Annotation>(
    $: Annotation,
    $i: ILog<Annotation>
): ILogger {
    const ann = $
    return ($) => {
        $i({
            message: $,
            annotation: ann
        })
        return undefined
    }
}