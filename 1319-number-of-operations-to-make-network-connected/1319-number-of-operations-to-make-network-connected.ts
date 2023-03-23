function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) {
        return -1
    }
    
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for (const [a, b] of connections) {
        adjList[a].push(b)
        adjList[b].push(a)
    }
    
    const visited = new Array(n).fill(false)
    
    function dfs(node) {
        visited[node] = true
        
        for (const neighbour of adjList[node]) {
            if (visited[neighbour]) {
                continue
            }
            
            dfs(neighbour)
        }
    }
    
    let count = 0
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue
        }
        
        dfs(i)
        count++
    }
    
    return count - 1
};