export type ILog<PAnnotation> = (
    $: {
        message: string,
        annotation: Annotation
    }
) => void