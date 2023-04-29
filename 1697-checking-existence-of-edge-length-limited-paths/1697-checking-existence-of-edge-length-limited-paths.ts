function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
    // need store idx of original as the return result need to follow the original order of queries
    const newQueries = queries.map((query, idx) => [...query, idx])
    
    // sort both queries and edgeList, so just need to iterate through them once and union them. no need keep repeating the same edge
    newQueries.sort((a, b) => a[2] - b[2])
    edgeList.sort((a, b) => a[2] - b[2])
    
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