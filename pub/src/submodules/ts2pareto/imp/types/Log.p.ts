export type ILog<PAnnotation> = (
    $: {
        message: string,
        annotation: PAnnotation
    }
) => void