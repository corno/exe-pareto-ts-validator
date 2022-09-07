export type ILog<Annotation> = (
    $: {
        message: string,
        annotation: Annotation
    }
) => void