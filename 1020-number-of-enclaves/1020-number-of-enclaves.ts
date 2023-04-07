function numEnclaves(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    const visited = []
    
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false)
    }
    
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || visited[i][j]) {
            return
        }
        
        visited[i][j] = true
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    
    // visit land connected to outer most border
    for (let i = 0; i < m; i++) {
        dfs(i, 0)
        dfs(i, n - 1)
    }
    
    for (let j = 0; j < n; j++) {
        dfs(0, j)
        dfs(m - 1, j)
    }
    
    // count the rest of the land that we haven't visit yet
    let count = 0
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                count++
            }
        }
    }
    
    return count
};

[
    [0,1,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0]
]

// function numEnclaves(grid: number[][]): number {
//     const m = grid.length
//     const n = grid[0].length
//     const visited = []
    
//     for (let i = 0; i < m; i++) {
//         visited[i] = new Array(n).fill(false)
//     }
    
//     function dfs(i, j) {
//         if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || visited[i][j]) {
//             return 0
//         }
        
//         visited[i][j] = true
        
//         return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
//     }
    
//     // visit not closed island first
//     for (let i = 0; i < m; i++) {
//         dfs(i, 0)
//         dfs(i, n - 1)
//     }
    
//     for (let j = 0; j < n; j++) {
//         dfs(0, j)
//         dfs(m - 1, j)
//     }
    
//     // visit only closed island
//     let count = 0
    
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             const numNodes = dfs(i, j)
//             if (numNodes > 0) {
//                 count += numNodes
//             }
//         }
//     }
    
//     return count
// };