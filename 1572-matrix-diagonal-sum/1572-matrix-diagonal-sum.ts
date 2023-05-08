function diagonalSum(mat: number[][]): number {
    let sum = 0
    const n = mat.length
    let primaryCol = 0
    
    for (let i = 0; i < n; i++) {
        sum += mat[i][primaryCol]
        mat[i][primaryCol] = 0
        primaryCol++
    }
    
    let secondaryCol = n - 1
    for (let i = 0; i < n; i++) {
        sum += mat[i][secondaryCol]
        mat[i][secondaryCol] = 0
        secondaryCol--
    }
    
    return sum
};