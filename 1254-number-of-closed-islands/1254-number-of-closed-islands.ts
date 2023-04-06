function closedIsland(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    const visited = []
    let count = 0
    
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 1 || visited[i][j]) {
            return false
        }
        
        visited[i][j] = true
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
        
        return true
    }
    
    for (let i = 0; i < m; i++) {
        dfs(i, 0)
        dfs(i, n - 1)
    }
    
    for (let j = 0; j < n; j++) {
        dfs(0, j)
        dfs(m - 1, j)
    }
    
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (dfs(i, j)) {
                count++
            }
        }
    }
    
    return count
};