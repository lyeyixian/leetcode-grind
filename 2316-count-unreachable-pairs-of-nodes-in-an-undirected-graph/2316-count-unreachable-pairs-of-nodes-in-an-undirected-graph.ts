function countPairs(n: number, edges: number[][]): number {
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for (const [a, b] of edges) {
        adjList[a].push(b)
        adjList[b].push(a)
    }
    
    const visited = new Array(n).fill(false)
    
    function dfs(node) {
        let count = 1

        visited[node] = true
        
        for (const neighbour of adjList[node]) {
            if (visited[neighbour]) {
                continue
            }
            
            count += dfs(neighbour)
        }
        
        return count
    }
    
    let numOfPairs = 0
    let remainingNodes = n
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue
        }
        
        const numOfNodesInComponent = dfs(i)
        
        remainingNodes -= numOfNodesInComponent
        numOfPairs += numOfNodesInComponent * remainingNodes
    }
    
    return numOfPairs
};