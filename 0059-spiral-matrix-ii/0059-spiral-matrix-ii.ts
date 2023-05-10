function generateMatrix(n: number): number[][] {
    const res = []
    
    for (let i = 0; i < n; i++) {
        res[i] = []
        
        for (let j = 0; j < n; j++) {
            res[i][j] = 0
        }
    }
    
    let top = 0
    let right = n - 1
    let bottom = n - 1
    let left = 0
    let count = 1
    
    function isOutOfBound() {
        return top > bottom || left > right
    }
    
    while (!isOutOfBound()) {
        for (let j = left; j <= right; j++) {
            res[top][j] = count
            count++
        }
        
        top++
        
        for (let i = top; i <= bottom; i++) {
            res[i][right] = count
            count++
        }
        
        right--
        
        if (isOutOfBound()) {
            break
        }
        
        for (let j = right; j >= left; j--) {
            res[bottom][j] = count
            count++
        }
        
        bottom--

        for (let i = bottom; i >= top; i--) {
            res[i][left] = count
            count++
        }
        
        left++
    }
    
    return res
};