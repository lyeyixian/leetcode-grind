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
    
    while (!isOutOfBound()) {
        for (let j = left; j <= right; j++) {
            res.push(matrix[top][j])
        }
        
        top++
        
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        
        right--
        
        if (isOutOfBound()) {
            break
        }
        
        for (let j = right; j >= left; j--) {
            res.push(matrix[bottom][j])
        }
        
        bottom--

        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        
        left++
    }
    
    return res
};