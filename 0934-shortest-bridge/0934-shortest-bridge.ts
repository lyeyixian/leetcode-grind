function shortestBridge(grid: number[][]): number {    
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    function populateQueue() {
        function dfs(i, j) {
            if (i < 0 || j < 0 || i >= n || j >= n || visited[i][j]) {
                return
            }

            if (grid[i][j] === 0) {
                queue.push([i, j])
            } else {
                visited[i][j] = true
                
                for (const [dx, dy] of direction) {
                    dfs(i + dx, j + dy)
                }
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

            for (const [dx, dy] of direction) {
                queue.push([x + dx, y + dy])
            }
        }
        
        step++
    }
    
    return step
};