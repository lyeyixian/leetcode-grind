class UnionFind {
    arr
    
    constructor(n) {
        this.arr = []
        
        for (let i = 0; i < n; i++) {
            this.arr[i] = i
        }
    }
    
    union(u, v) {
        const rootU = this.find(u)
        const rootV = this.find(v)
        
        if (rootU !== rootV) {
            this.arr[rootU] = rootV    
        }
    }
    
    find(u) {
        if (this.arr[u] !== u) {
            this.arr[u] = this.find(this.arr[u])
        }
        
        return this.arr[u]
    }
}

function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length
    const uf = new UnionFind(n)
    let numOfComponents = n
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] && uf.find(i) !== uf.find(j)) {
                numOfComponents--
                uf.union(i, j)
            }
        }
    }
        
    return numOfComponents
}

// function findCircleNum(isConnected: number[][]): number {
//     const n = isConnected.length
//     const adjList = []
    
//     for (let i = 0; i < n; i++) {
//         adjList[i] = []
//     }
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (isConnected[i][j]) {
//                 adjList[i].push(j)
//             }
//         }
//     }
    
//     const visited = new Array(n).fill(false)
    
//     function dfs(i) {
//         if (i >= n || visited[i]) {
//             return false
//         }
        
//         visited[i] = true
        
//         for (const neighbour of adjList[i]) {
//             dfs(neighbour)
//         }
        
//         return true
//     }
    
//     let count = 0
    
//     for (let i = 0; i < n; i++) {
//         if (dfs(i)) {
//             count++
//         }
//     }
    
//     return count
// };