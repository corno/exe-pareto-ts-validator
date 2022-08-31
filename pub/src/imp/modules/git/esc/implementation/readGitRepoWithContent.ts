// import * as cp from "child_process"
// import { readGitRepo } from "./readGitRepo";
// export function readGitRepoWithContent(
//     repoPath: string,
//     callback: (
//         filePath: string,
//         content: string,
//     ) => void
// ) {
//     readGitRepo(
//         repoPath,
//         (
//             filePath,
//         ) => {
//             cp.exec(`cd ${repoPath} && git show HEAD:"${filePath}"`, (err, $content, stderr) => {
//                 if (stderr !== "") {
//                     console.error(`${repoPath}: ${stderr}`)
//                 }
//                 if (err !== null) {
//                     console.error(`${repoPath}: ${err}`)
//                 } else {
//                     callback(
//                         filePath,
//                         $content,
//                     )
//                 }
//             })
//         }
//     )
// }