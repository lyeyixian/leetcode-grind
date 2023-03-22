function minScore(n: number, roads: number[][]): number {
    const adjList = {}
    
    for (const [a, b, distance] of roads) {
        if (!adjList[a]) {
            adjList[a] = []
        }
        
        if (!adjList[b]) {
            adjList[b] = []
        }
        
        adjList[a].push({ distance, id: b })
        adjList[b].push({ distance, id: a })
    }
    
    const queue = [1]
    const visited = new Set()
    let min = Infinity
    
    visited.add(1)
    
    while (queue.length) {
        const node = queue.shift()
        
        for (const { distance, id } of adjList[node]) {
            min = Math.min(min, distance)
            
            if (visited.has(id)) {
                continue
            }

            queue.push(id)
            visited.add(id)
        }
    }
    
    return min
};