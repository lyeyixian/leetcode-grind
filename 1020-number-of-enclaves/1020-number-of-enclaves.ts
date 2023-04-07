function numEnclaves(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    
    return closedIsland(grid)
};

function closedIsland(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    const visited = []
    let count = 0
    
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || visited[i][j]) {
            return 0
        }
        
        visited[i][j] = true
        
        return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
    }
    
    // visit not closed island first
    for (let i = 0; i < m; i++) {
        dfs(i, 0)
        dfs(i, n - 1)
    }
    
    for (let j = 0; j < n; j++) {
        dfs(0, j)
        dfs(m - 1, j)
    }
    
    // visit only closed island
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const numNodes = dfs(i, j)
            if (numNodes > 0) {
                count += numNodes
            }
        }
    }
    
    return count
};