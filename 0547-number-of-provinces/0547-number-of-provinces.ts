function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j]) {
                adjList[i].push(j)
            }
        }
    }
    
    const visited = new Array(n).fill(false)
    
    function dfs(i) {
        if (i >= n || visited[i]) {
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