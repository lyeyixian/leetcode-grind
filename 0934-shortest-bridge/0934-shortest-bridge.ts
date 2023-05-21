function shortestBridge(grid: number[][]): number {    
    function populateQueue() {
        function dfs(i, j) {
            if (i < 0 || j < 0 || i >= n || j >= n || visited[i][j]) {
                return
            }

            if (grid[i][j] === 0) {
                queue.push([i, j])
            } else {
                visited[i][j] = true
                dfs(i + 1, j)
                dfs(i - 1, j)
                dfs(i, j + 1)
                dfs(i, j - 1)   
            }
        }
        
        const queue = []
    
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    dfs(i, j)
                    
                    return queue
                }
            }
        }
        
        return queue
    }
    
    const n = grid.length
    const visited = []
    
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    const queue = populateQueue()
    let step = 0
    
    while (queue.length) {
        const currentLength = queue.length
        
        for (let i = 0; i < currentLength; i++) {
            const [x, y] = queue.shift()
            
            if (x < 0 || y < 0 || x >= n || y >= n || visited[x][y]) {
                continue
            }
            
            if (grid[x][y] === 1) {
                return step
            }
            
            visited[x][y] = true
            queue.push([x + 1, y])
            queue.push([x - 1, y])
            queue.push([x, y + 1])
            queue.push([x, y - 1])
        }
        
        step++
    }
    
    return step
};