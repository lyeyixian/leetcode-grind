function minReorder(n: number, connections: number[][]): number {
    const adjList = []
    const directedAdjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = new Set()
        directedAdjList[i] = new Set()
    }
    
    for (const [a, b] of connections) {
        adjList[a].add(b)
        adjList[b].add(a)
        directedAdjList[a].add(b)
    }
    
    let visited = new Array(n).fill(false)
    let count = 0
    
    function dfs(node) {
        visited[node] = true
        
        for (const neighbour of adjList[node].values()) {
            if (visited[neighbour]) {
                continue
            }

            if (directedAdjList[node].has(neighbour)) {
                count++
            }
            
            dfs(neighbour)
        }
    }
    
    dfs(0)
    
    return count
};