/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const posOfZero = []
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                posOfZero.push([i, j])
            }
        }
    }
    
    for (const pos of posOfZero) {
        const [x, y] = pos
        
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[x][i] = 0
        }
        
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][y] = 0
        }
    }
};