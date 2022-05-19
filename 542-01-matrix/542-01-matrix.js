/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const res = []
    const queue = []
    const DIR = [0, 1, 0, -1, 0]

    for (let i = 0; i < mat.length; i++) {
        res[i] = []

        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j]) {
                res[i][j] = -1
            } else {
                res[i][j] = 0
                queue.push([i, j])
            }
        }
    }

    while (queue.length) {
        const currentPos = queue.shift()
        const originalI = currentPos[0]
        const originalJ = currentPos[1]

        for (let i = 0; i < DIR.length - 1; i++) {
            const newI = DIR[i] + originalI
            const newJ = DIR[i + 1] + originalJ

            if (newI < 0 || newI >= res.length || newJ < 0 || newJ >= res[0].length || res[newI][newJ] !== -1) {
                continue
            }

            res[newI][newJ] = 1 + res[originalI][originalJ]
            queue.push([newI, newJ])
        }
    }

    return res  
};