function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length
    const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    
    if (grid[0][0] || grid[n - 1][n - 1]) {
        return -1
    }
    
    if (n === 1 && grid[0][0] === 0) {
        return 1
    }
    
    const visited = []
    
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    let count = 1
    const queue = [[0, 0]]
    
    visited[0][0] = true
    
    while (queue.length) {
        const currLength = queue.length
        
        for (let i = 0; i < currLength; i++) {
            const [x, y] = queue.shift()
        
            for (const [dx, dy] of dir) {
                const newX = x + dx
                const newY = y + dy

                if (newX < 0 || newY < 0 || newX >= n || newY >= n || visited[newX][newY] || grid[newX][newY]) {
                    continue
                }

                if (newX === n - 1 && newY === n - 1) {
                    return count + 1
                }

                queue.push([newX, newY])
                visited[newX][newY] = true
            }
        }
        
        count++  
    }
    
    return -1
};