class AppleMatrix {
    prefixMatrix: number[][]

    constructor(matrix: string[][]) {
        const m = matrix.length
        const n = matrix[0].length
        
        const prefixMatrix = []
        
        for (let i = 0; i < m + 1; i++) {
            prefixMatrix[i] = new Array(n + 1).fill(0)
        }
        
        for (let i = 0; i < m; i++) {
            let prefix = 0
            
            for (let j = 0; j < n; j++) {
                prefix += matrix[i][j] === 'A' ? 1 : 0
                
                const matrixAbove = prefixMatrix[i][j + 1]
                
                prefixMatrix[i + 1][j + 1] = prefix + matrixAbove
            }
        }
        
        this.prefixMatrix = prefixMatrix
    }

    hasApple(row1: number, col1: number, row2: number, col2: number): number {
        const newRow1 = row1 + 1
        const newCol1 = col1 + 1
        const newRow2 = row2 + 1
        const newCol2 = col2 + 1
        
        const currentMatrix = this.prefixMatrix[newRow2][newCol2]
        const aboveMatrix = this.prefixMatrix[newRow1 - 1][newCol2]
        const leftMatrix = this.prefixMatrix[newRow2][newCol1 - 1]
        const topLeftMatrix = this.prefixMatrix[newRow1 - 1][newCol1 - 1]
        
        return currentMatrix - aboveMatrix - leftMatrix + topLeftMatrix > 0 ? 1 : 0
    }
}

function ways(pizza: string[], k: number): number {
    const modulo = 1000000007
    const m = pizza.length
    const n = pizza[0].length
    const appleMatrix = new AppleMatrix(pizza.map(str => str.split('')))
    const mem = []
    
    for (let i = 0; i < m; i++) {
        mem[i] = []
        for (let j = 0; j < n; j++) {
            mem[i][j] = []
            for (let l = 0; l < k; l++) {
                mem[i][j][l] = -1
            }
        }
    }
    
    function dp(row, col, k) {
        if (k === 0) {
            return appleMatrix.hasApple(row, col, m - 1, n - 1)
        }
        
        let res = mem[row][col][k]
        
        if (res !== -1) {
            return res
        }
        
        res = 0
        
        for (let i = row; i < m - 1; i++) {
            res += appleMatrix.hasApple(row, col, i, n - 1) * dp(i + 1, col, k - 1)
            res %= modulo
        }
        
        for (let i = col; i < n - 1; i++) {
            res += appleMatrix.hasApple(row, col, m - 1, i) * dp(row, i + 1, k - 1)
            res %= modulo
        }
        
        mem[row][col][k] = res
        
        return res
    }
    
    return dp(0, 0, k - 1)
};

