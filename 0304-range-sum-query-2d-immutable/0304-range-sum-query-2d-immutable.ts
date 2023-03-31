class NumMatrix {
    m: number
    n: number
    prefixMatrix: number[][]

    constructor(matrix: number[][]) {
        this.m = matrix.length
        this.n = matrix[0].length
        
        const prefixMatrix = []
        
        for (let i = 0; i < this.m + 1; i++) {
            prefixMatrix[i] = new Array(this.n + 1).fill(0)
        }
        
        for (let i = 0; i < this.m; i++) {
            let prefix = 0
            
            for (let j = 0; j < this.n; j++) {
                prefix += matrix[i][j]
                
                const matrixAbove = prefixMatrix[i][j + 1]
                
                prefixMatrix[i + 1][j + 1] = prefix + matrixAbove
            }
        }
        
        this.prefixMatrix = prefixMatrix
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        const newRow1 = row1 + 1
        const newCol1 = col1 + 1
        const newRow2 = row2 + 1
        const newCol2 = col2 + 1
        
        const currentMatrix = this.prefixMatrix[newRow2][newCol2]
        const aboveMatrix = this.prefixMatrix[newRow1 - 1][newCol2]
        const leftMatrix = this.prefixMatrix[newRow2][newCol1 - 1]
        const topLeftMatrix = this.prefixMatrix[newRow1 - 1][newCol1 - 1]
        
        return currentMatrix - aboveMatrix - leftMatrix + topLeftMatrix
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */