function minimumFuelCost(roads: number[][], seats: number): number {
    const adjList = [[]]
    
    for (const [u, v] of roads) {
        if (!adjList[u]) {
            adjList[u] = []
        }
        
        if (!adjList[v]) {
            adjList[v] = []
        }
        
        adjList[u].push(v)
        adjList[v].push(u)
    }
    
    let res = { data: 0 }
    
    dfs(0, -1, res, adjList, seats)
    
    return res.data
};

function dfs(node, parent, res, adjList, seats) {
    let numPassengerAtCurr = 1
    
    for (const neighbour of adjList[node]) {
        if (neighbour === parent) {
            continue
        }
        
        const numPassengerAtNeighbour = dfs(neighbour, node, res, adjList, seats)
        
        numPassengerAtCurr += numPassengerAtNeighbour    
    }
    
    if (node !== 0) {
        const numCarNeeded = Math.ceil(numPassengerAtCurr / seats)
        
        res.data += numCarNeeded
    }

    return numPassengerAtCurr
}