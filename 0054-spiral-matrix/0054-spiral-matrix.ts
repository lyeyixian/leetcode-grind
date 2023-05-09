function spiralOrder(matrix: number[][]): number[] {
    function isOutOfBound() {
        return top > bottom || left > right
    }
    
    const m = matrix.length
    const n = matrix[0].length
    let top = 0
    let right = n - 1
    let bottom = m - 1
    let left = 0
    const res = []
    
    while (true) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        
        top++
        
        if (isOutOfBound()) {
            break
        }
        
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        
        right--
        
        if (isOutOfBound()) {
            break
        }
        
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        
        bottom--
        
        if (isOutOfBound()) {
            break
        }
        
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        
        left++
        
        if (isOutOfBound()) {
            break
        }
    }
    
    return res
};