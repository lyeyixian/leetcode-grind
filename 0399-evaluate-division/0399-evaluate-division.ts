function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    function bfs(node, target) {
        if (!adjList[node] || !adjList[target]) {
            return -1.0
        }
        
        const queue = [[node, 1]]
        const visited = new Array(n).fill(false)
        
        visited[node] = true
        
        while (queue.length) {
            const [curr, sum] = queue.shift()
            
            if (curr === target) {
                return sum
            }
            
            for (const { id, value } of adjList[curr]) {
                if (visited[id]) {
                    continue
                }
                
                visited[id] = true
                queue.push([id, sum * value])
            }
        }
        
        return -1.0
    }
    
    const adjList = {}
    const n = equations.length
    
    for (let i = 0; i < n; i++) {
        const [u, v] = equations[i]
        const value = values[i]
        
        if (!adjList[u]) {
            adjList[u] = []
        }
        
        if (!adjList[v]) {
            adjList[v] = []
        }
        
        adjList[u].push({ id: v, value })
        adjList[v].push({ id: u, value: 1 / value })
    }
    
    const res = []
    
    for (const [from, to] of queries) {
        res.push(bfs(from, to))
    }
    
    return res
};

// dfs
// function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
//     function dfs(node, target, res, visited) {
//         if (node === target) {
//             return res
//         }
        
//         visited[node] = true
        
//         for (const { id, value } of adjList[node]) {
//             if (visited[id]) {
//                 continue
//             }
            
//             const ans = dfs(id, target, value * res, visited)
//             if (ans !== -1) {
//                 return ans
//             }
//         }
        
//         return -1.0
//     }
    
//     const adjList = {}
//     const n = equations.length
    
//     for (let i = 0; i < n; i++) {
//         const [u, v] = equations[i]
//         const value = values[i]
        
//         if (!adjList[u]) {
//             adjList[u] = []
//         }
        
//         if (!adjList[v]) {
//             adjList[v] = []
//         }
        
//         adjList[u].push({ id: v, value })
//         adjList[v].push({ id: u, value: 1 / value })
//     }
    
//     const res = []
    
//     for (const [from, to] of queries) {
//         if (!adjList[from] || !adjList[to]) {
//             res.push(-1.0)
//             continue
//         }
        
//         res.push(dfs(from, to, 1, new Array(n).fill(false)))
//     }
    
//     return res
// };