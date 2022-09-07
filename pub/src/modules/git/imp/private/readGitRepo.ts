// import * as cp from "child_process"
// export function readGitRepo(
//     repoPath: string,
//     callback: (
//         filePath: string,
//     ) => void
// ) {
//     cp.exec(`cd ${repoPath} &&  git ls-files`, (err, stdout, stderr) => {
//         if (stderr !== "") {
//             console.error(`${repoPath}: ${stderr}`)
//         }
//         if (err !== null) {
//             console.error(`${repoPath}: ${err}`)
//         } else {
//             const files = stdout.split("\n")

//             files.forEach(($) => {
//                 if ($ === "") {
//                     return
//                 }
//                 callback($)
//             })
//         }
//     });
// }