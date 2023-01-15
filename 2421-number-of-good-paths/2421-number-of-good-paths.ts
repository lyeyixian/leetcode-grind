function numberOfGoodPaths(vals: number[], edges: number[][]): number {
    const adjList = []
    
    for (let i = 0; i < vals.length; i++) {
        adjList.push([])
    }
    
    for (const [u, v] of edges) {
        adjList[u].push(v)
        adjList[v].push(u)
    }
    
    const map = new Map()
    const transformedVals = vals.map((val, index) => ({ val, node: index }))
    
    transformedVals.sort((a, b) => a.val - b.val)
    
    for (const transformedVal of transformedVals) {
        const val = transformedVal.val
        const node = transformedVal.node
        
        if (!map.has(val)) {
            map.set(val, [])
        }
        
        map.get(val).push(node)
    }
    
    const uf = []
    
    for (let i = 0; i < vals.length; i++) {
        uf[i] = i
    }
    
    let res = vals.length
    
    // starts union find from lowest value nodes
    // only union if neighbour from adjList have values <= current node
    for (const nodes of map.values()) {
        for (const node of nodes) {
            for (const neighbour of adjList[node]) {
                if (vals[neighbour] <= vals[node]) {
                    union(uf, node, neighbour)
                }
            }
        }
        
        const counter = new Map()
        
        for (const node of nodes) {
            const key = find(uf, node)
            
            if (!counter.has(key)) {
                counter.set(key, 0)
            }
            
            counter.set(key, counter.get(key) + 1)
        }
        
        for (const count of counter.values()) {
            if (count >= 2) {
                res += Math.floor(count * (count - 1) / 2)
            }
        }
    }
    
    return res
};

function union(uf, a, b) {
    const rootA = find(uf, a)
    const rootB = find(uf, b)
    
    if (rootA !== rootB) {
        uf[rootA] = rootB    
    }
}

function find(uf, a) {
    if (uf[a] !== a) {
        uf[a] = find(uf, uf[a])
    }
    
    return uf[a]
}