function maximumDetonation(bombs: number[][]): number {
    function canDetonate(target, given) {
        const [x1, y1, r1] = bombs[target]
        const [x2, y2, r2] = bombs[given]
        const lhs = ((x1 - x2) ** 2) + ((y1 - y2) ** 2)
        
        return lhs <= (r2 ** 2)
    }
    
    function dfs(i, visited) {
        if (i >= n || visited[i]) {
            return 0
        }
        
        visited[i] = true
        let count = 1
        
        for (const neighbour of adjList[i]) {
            count += dfs(neighbour, visited)
        }
        
        return count
    }
    
    const n = bombs.length
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (canDetonate(i, j)) {
                adjList[j].push(i)
            }
            
            if (canDetonate(j, i)) {
                adjList[i].push(j)
            }
        }
    }
    
    let res = 0
    
    for (let i = 0; i < n; i++) {
        res = Math.max(res, dfs(i, new Array(n).fill(false)))
    }
    
    return res
}

// not that efficient probably
// function maximumDetonation(bombs: number[][]): number {
//     const n = bombs.length
    
//     function canDetonate(target, given) {
//         const [x1, y1, r1] = bombs[target]
//         const [x2, y2, r2] = bombs[given]
//         const lhs = ((x1 - x2) ** 2) + ((y1 - y2) ** 2)
        
//         return lhs <= (r2 ** 2)
//     }
    
//     function dfs(i, visited) {
//         if (i >= n || visited[i]) {
//             return 0
//         }
        
//         visited[i] = true
//         let count = 1
        
//         for (let j = 0; j < n; j++) {
//             if (j !== i && canDetonate(j, i)) {
//                 count += dfs(j, visited)
//             }
//         }
        
//         return count
//     }
    
//     let res = 0
    
//     for (let i = 0; i < n; i++) {
//         res = Math.max(res, dfs(i, new Array(n).fill(false)))    
//     }
    
//     return res
// };