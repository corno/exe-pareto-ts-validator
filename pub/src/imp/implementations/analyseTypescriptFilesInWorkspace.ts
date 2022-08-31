// import { analyseGitRepo } from "./analyseGitRepo"
// import * as pth from "path"
// import * as fs from "fs"
// export function analyseTypeScriptFilesInWorkspace(
//     directoryPath: string,
//     outPath: string,
// ) {

//     const today = new Date().toISOString().split('T')[0]

//     const out = fs.createWriteStream(
//         pth.join(outPath, `${today}.csv`),
//         {
//             encoding: "utf-8"
//         }
//     )

//     out.write(
//         [
//             `date`,
//             `repository`,
//             `path`,
//             `pattern`,
//             `correct`,
//             `directory`,
//             `basename`,
//             `extension`,
//             `lines`,
//             `generated`,
//         ].join(`,`)
//     )
//     analyseGitRepo(
//         directoryPath,
//         (
//             repoPath,
//             filePath,
//             analysis,
//             lineCount,
//         ) => {
//             if (analysis.pathPattern === "/src/*/esc/**/*.ts") {
//                 out.write(`\r\n`)
//                 out.write(
//                     [
//                         today,
//                         repoPath,
//                         filePath,
//                         analysis.pathPattern,
//                         analysis.error === null,
//                         pth.dirname(filePath) === "." ? "" : pth.dirname(filePath),
//                         pth.basename(filePath),
//                         pth.extname(filePath),
//                         lineCount,
//                         (filePath.indexOf(".generated") !== -1)
//                             ? "true"
//                             : "false",
//                     ].join(`,`)
//                 )
//             }
//         }
//     )
// }
