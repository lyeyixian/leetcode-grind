/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length
    const n = mat[0].length
    const maxDist = m + n

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                continue
            }

            const top = (i - 1 >= 0) ? mat[i - 1][j] : maxDist
            const left = (j - 1 >= 0) ? mat[i][j - 1] : maxDist
            mat[i][j] = Math.min(top, left) + 1
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (mat[i][j] === 0) {
                continue
            }

            const bottom = (i + 1 < m) ? mat[i + 1][j] : maxDist
            const right = (j + 1 < n) ? mat[i][j + 1] : maxDist
            mat[i][j] = Math.min(mat[i][j], Math.min(bottom, right) + 1)
        }
    }

    return mat  
};

// var updateMatrix = function(mat) {
//     const res = []
//     const queue = []
//     const DIR = [0, 1, 0, -1, 0]

//     for (let i = 0; i < mat.length; i++) {
//         res[i] = []

//         for (let j = 0; j < mat[0].length; j++) {
//             if (mat[i][j]) {
//                 res[i][j] = -1
//             } else {
//                 res[i][j] = 0
//                 queue.push([i, j])
//             }
//         }
//     }

//     while (queue.length) {
//         const currentPos = queue.shift()
//         const originalI = currentPos[0]
//         const originalJ = currentPos[1]

//         for (let i = 0; i < DIR.length - 1; i++) {
//             const newI = DIR[i] + originalI
//             const newJ = DIR[i + 1] + originalJ

//             if (newI < 0 || newI >= res.length || newJ < 0 || newJ >= res[0].length || res[newI][newJ] !== -1) {
//                 continue
//             }

//             res[newI][newJ] = 1 + res[originalI][originalJ]
//             queue.push([newI, newJ])
//         }
//     }

//     return res  
// };