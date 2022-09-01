/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowToZero = new Set()
    const colToZero = new Set()
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowToZero.add(i)
                colToZero.add(j)
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rowToZero.has(i) || colToZero.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
};