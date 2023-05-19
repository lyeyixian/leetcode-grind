function isBipartite(graph: number[][]): boolean {
    const n = graph.length
    const visited = new Array(n).fill(0)
    
    function bfs(node) {
        if (visited[node]) {
            return true
        }
        
        const queue = [node]
        
        visited[node] = 1
        
        while (queue.length) {
            const curr = queue.shift()
            
            for (const neighbour of graph[curr]) {
                if (visited[neighbour] && visited[neighbour] === visited[curr]) {
                    return false
                } else if (!visited[neighbour]) {
                    queue.push(neighbour)
                    visited[neighbour] = visited[curr] * -1
                }
            }
        }
        
        return true
    }
    
    for (let i = 0; i < n; i++) {
        if (!bfs(i)) {
            return false
        }
    }
    
    return true
};