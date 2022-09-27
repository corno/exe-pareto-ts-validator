import { ILog } from "../types/Log"

export type ILogger = ($: string) => null

export function createLogger<PAnnotation>(
    $: PAnnotation,
    $i: ILog<PAnnotation>
): ILogger {
    const ann = $
    return ($) => {
        $i({
            message: $,
            annotation: ann
        })
        return null
    }
}