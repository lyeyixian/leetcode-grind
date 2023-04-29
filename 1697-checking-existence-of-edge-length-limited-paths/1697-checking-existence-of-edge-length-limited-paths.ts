function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
    const newQueries = queries.map((query, idx) => [...query, idx])
    
    newQueries.sort((a, b) => a[2] - b[2])
    
    const uf = []
    
    for (let i = 0; i < n; i++) {
        uf[i] = i
    }
    
    function find(u) {
        if (uf[u] !== u) {
            uf[u] = find(uf[u])
        }
        
        return uf[u]
    }
    
    function union(u, v) {
        const componentU = find(u)
        const componentV = find(v)
        
        if (componentU !== componentV) {
            uf[componentU] = componentV
        }
    }
    
    let edgeIdx = 0
    const res = []
    
    edgeList.sort((a, b) => a[2] - b[2])
    
    for (const [p, q, limit, idx] of newQueries) {
        while (edgeIdx < edgeList.length && edgeList[edgeIdx][2] < limit) {
            const [u, v] = edgeList[edgeIdx]
            
            union(u, v)
            edgeIdx++
        }
        
        res[idx] = find(p) === find(q)
    }
    
    return res
};