function maxDistance(grid: number[][]): number {
    const queue = []
    const n = grid.length
    
    // multisource bfs
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
            }
        }
    }
    
    let res = -1
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    while (queue.length) {
        const [x, y] = queue.shift()
        
        res = grid[x][y] // res is the last position we visit
        
        for (const [dx, dy] of direction) {
            const newX = x + dx
            const newY = y + dy
            
            if (newX < 0 || newY < 0 || newX >= n || newY >= n || grid[newX][newY] !== 0) {
                continue
            }
            
            queue.push([newX, newY])
            grid[newX][newY] = grid[x][y] + 1 // use the original grid as visited also as the distance
        }
    }
    
    return res > 1 ? res - 1 : -1 // handle cases of all land
};