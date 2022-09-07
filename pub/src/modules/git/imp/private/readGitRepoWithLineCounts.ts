// import { readGitRepoWithContent } from "./readGitRepoWithContent"
// export function readGitRepoWithLineCounts(
//     repoPath: string,
//     log: ($: {
//         filePath: string,
//         lineCount: number,
//     }) => void,
// ) {
//     readGitRepoWithContent(
//         repoPath,
//         (
//             $filePath,
//             $content,
//         ) => {
//             log({
//                 filePath: $filePath,
//                 lineCount: (() => {
//                     let lineCount = 1 //there's always 1 line
//                     for (let i = 0; i !== $content.length; i += 1) {
//                         if ($content[i] === "\n") {
//                             lineCount += 1
//                         }
//                     }
//                     return lineCount
//                 })()
//             })
//         }
//     )
// }