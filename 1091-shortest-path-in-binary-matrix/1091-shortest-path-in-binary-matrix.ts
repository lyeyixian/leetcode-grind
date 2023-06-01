function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length
    const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    const visited = []
    
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    let count = 1
    const queue = [[0, 0]]
    
    
    
    while (queue.length) {
        const currLength = queue.length
        
        for (let i = 0; i < currLength; i++) {
            const [x, y] = queue.shift()
            
            if (x < 0 || y < 0 || x >= n || y >= n || visited[x][y] || grid[x][y]) {
                continue
            }
            
            visited[x][y] = true
             
            
            if (x === n - 1 && y === n - 1) {
                return count
            }
        
            for (const [dx, dy] of dir) {
                const newX = x + dx
                const newY = y + dy

                queue.push([newX, newY])
            }
        }
        
        count++ 
    }
    
    return -1
};