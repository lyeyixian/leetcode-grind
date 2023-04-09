function largestPathValue(colors: string, edges: number[][]): number {
    const n = colors.length
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList.push([])
    }
    
    for (const [a, b] of edges) {
        adjList[a].push(b)
    }
    
    const colorFreqMatrix = []
    
    for (let i = 0; i < n; i++) {
        colorFreqMatrix.push(new Array(26).fill(0))
    }
    
    function dfs(node) {
        if (path[node]) {
            return -1
        }
        
        if (visited[node]) {
            return 0
        }
        
        path[node] = true
        visited[node] = true
        
        const colorIdx = colors[node].charCodeAt(0) - 'a'.charCodeAt(0)
        
        for (const neighbour of adjList[node]) {
            if (dfs(neighbour) === -1) {
                return -1
            }
            
            for (let i = 0; i < 26; i++) {
               colorFreqMatrix[node][i] = Math.max(colorFreqMatrix[node][i], colorFreqMatrix[neighbour][i]) 
            }
        }
        
        colorFreqMatrix[node][colorIdx]++
        path[node] = false
        
        return Math.max(...colorFreqMatrix[node])
    }
    
    const visited = new Array(n).fill(false)
    const path = new Array(n).fill(false)
    let res = 0
    
    for (let i = 0; i < n; i++) {
        const maxFreq = dfs(i)
        
        if (maxFreq === -1) {
            return -1
        }
        
        res = Math.max(res, maxFreq)
    }
    
    return res
};