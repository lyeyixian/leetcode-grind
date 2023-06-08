function countNegatives(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    let count = 0
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 0) {
                count++
            }
        }
    }
    
    return count
};