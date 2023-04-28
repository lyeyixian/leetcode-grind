function numSimilarGroups(strs: string[]): number {
    const n = strs.length
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) {
                adjList[i].push(j)
                adjList[j].push(i)
            }
        }
    }
    
    const visited = new Array(n).fill(false)
    
    function dfs(i) {
        if (visited[i]) {
            return false
        }
        
        visited[i] = true
        
        for (const neighbour of adjList[i]) {
            dfs(neighbour)
        }
        
        return true
    }
    
    let count = 0
    
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            count++
        }
    }
    
    return count
};

function isSimilar(x, y) {
    if (x === y) {
        return true
    }
    
    // count the index that are different
    let count = 0
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            count++
        }
    }
    
    return count === 2
}

// union find solution
// function numSimilarGroups(strs: string[]): number {
//     const uf = []
    
//     for (let i = 0; i < strs.length; i++) {
//         uf[i] = i
//     }
    
//     for (let i = 0; i < strs.length - 1; i++) {
//         for (let j = i + 1; j < strs.length; j++) {
//             if (isSimilar(strs[i], strs[j])) {
//                 union(uf, i, j)
//             }
//         }
//     }
    
//     const set = new Set()
    
//     for (const idx of uf) {
//         set.add(find(uf, idx))
//     }
    
//     return set.size
// };

// function union(uf, a, b) {
//     const rootA = find(uf, a)
//     const rootB = find(uf, b)
    
//     if (rootA !== rootB) {
//         uf[rootA] = rootB    
//     }
// }

// function find(uf, a) {
//     if (uf[a] !== a) {
//         uf[a] = find(uf, uf[a])
//     }
    
//     return uf[a]
// }

// function isSimilar(x, y) {
//     if (x === y) {
//         return true
//     }
    
//     // count the index that are different
//     let count = 0
    
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== y[i]) {
//             count++
//         }
//     }
    
//     return count === 2
// }