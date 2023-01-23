function findJudge(n: number, trust: number[][]): number {
    const indegree = []
    const outdegree = []
    
    for (let i = 0; i < n; i++) {
        indegree.push(0)
        outdegree.push(0)
    }
    
    for (const [u, v] of trust) {
        indegree[v - 1]++
        outdegree[u - 1]++
    }
    
    for (let i = 0; i < n; i++) {
        if (indegree[i] === n - 1 && outdegree[i] === 0) {
            return i + 1
        }
    }
    
    return -1
};