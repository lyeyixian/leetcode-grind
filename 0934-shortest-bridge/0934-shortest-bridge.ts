function shortestBridge(grid: number[][]): number {    
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const n = grid.length
    const visited = []
    
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    function invalid(i, j) {
        return i < 0 || j < 0 || i >= n || j >= n
    }
    
    // visit the first island and populate the queue with initial water to visit
    function populateQueue() {
        function dfs(i, j) {
            if (invalid(i, j) || visited[i][j]) {
                return
            }

            // if is water, push to queue
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
                    
                    // only visit the first island, so immediately return
                    return queue
                }
            }
        }
    }
    
    const queue = populateQueue()
    let step = 0
    
    while (queue.length) {
        const currentLength = queue.length
        
        // perform bfs level by level    
        for (let i = 0; i < currentLength; i++) {
            const [x, y] = queue.shift()
            
            if (invalid(x, y) || visited[x][y]) {
                continue
            }
            
            // found the second island, return the step used
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
};