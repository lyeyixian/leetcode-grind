function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const res = []
    const indegrees = new Array(n).fill(0)
    
    for (const [u, v] of edges) {
        indegrees[v]++
    }
    
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 0) {
            res.push(i)
        }
    }
    
    return res
};