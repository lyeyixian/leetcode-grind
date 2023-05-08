function diagonalSum(mat: number[][]): number {
    let sum = 0
    const n = mat.length
    
    for (let i = 0; i < n; i++) {
        // primary diagonal
        sum += mat[i][i]
        
        // secondary diagonal
        sum += mat[i][n - 1 - i]
    }
    
    if (n % 2) {
        const middleIdx = Math.floor(n / 2)
        sum -= mat[middleIdx][middleIdx]
    }
    
    return sum
};

// function diagonalSum(mat: number[][]): number {
//     let sum = 0
//     const n = mat.length
    
//     for (let i = 0; i < n; i++) {
//         // primary diagonal
//         sum += mat[i][i]
//         mat[i][i] = 0
        
//         // secondary diagonal
//         sum += mat[i][n - 1 - i]
//         mat[i][n - 1 - i] = 0
//     }
    
//     return sum
// };