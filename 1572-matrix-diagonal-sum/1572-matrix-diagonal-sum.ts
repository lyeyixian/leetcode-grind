function diagonalSum(mat: number[][]): number {
    let sum = 0
    const n = mat.length
    
    for (let i = 0; i < n; i++) {
        // primary diagonal
        sum += mat[i][i]
        mat[i][i] = 0
        
        // secondary diagonal
        sum += mat[i][n - 1 - i]
        mat[i][n - 1 - i] = 0
    }
    
    return sum
};