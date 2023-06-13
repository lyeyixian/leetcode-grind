function equalPairs(grid: number[][]): number {
    const n = grid.length
    const map = {}
    
    for (let i = 0; i < n; i++) {
        const key = grid[i].join(',')
        if (!map[key]) {
            map[key] = 0
        }
        
        map[key]++
    }
    
    let count = 0
    
    for (let j = 0; j < n; j++) {
        const col = []
        
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j])
        }
        
        const key = col.join(',')

        if (map[key]) {
            count += map[key]
        }
    }
    
    return count
};