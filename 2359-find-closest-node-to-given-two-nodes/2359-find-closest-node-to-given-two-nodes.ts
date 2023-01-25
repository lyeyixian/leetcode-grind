function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    const adjList = []
    
    for (let i = 0; i < edges.length; i++) {
        adjList[i] = []
        
        const dest = edges[i]
        
        if (dest > -1) {
            adjList[i].push(dest)
        }
    }
    
    // map: Node -> dist from src
    // also used to check if a node is visited before
    const node1DistMap = new Map()
    const node2DistMap = new Map()
    
    bfs(node1, node1DistMap, adjList)
    bfs(node2, node2DistMap, adjList)
    
    let resIndex = -1
    let minDistance = Infinity
    
    for (let i = 0; i < edges.length; i++) {
        if (node1DistMap.has(i) && node2DistMap.has(i)) {
            const maxDist = Math.max(node1DistMap.get(i), node2DistMap.get(i))
            
            if (maxDist < minDistance) {
                resIndex = i
                minDistance = maxDist
            }
        }
    }
    
    return resIndex
};

function bfs(src, nodeDistMap, adjList) {
    const queue = []
    
    queue.push({ node: src, distance: 0 })
    nodeDistMap.set(src, 0)
    
    while (queue.length) {
        const { node, distance } = queue.shift()
        
        for (const neighbour of adjList[node]) {
            if (!nodeDistMap.has(neighbour)) {
                queue.push({ node: neighbour, distance: distance + 1 })
                nodeDistMap.set(neighbour, distance + 1)    
            }
        }
    }
}