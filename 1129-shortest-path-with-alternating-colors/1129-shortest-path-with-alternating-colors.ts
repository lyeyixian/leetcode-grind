function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    const adjListRed = []
    const adjListBlue = []
    
    for (let i = 0; i < n; i++) {
        adjListRed.push([])
        adjListBlue.push([])
    }
    
    for (const [u, v] of redEdges) {
        adjListRed[u].push(v)
    }
    
    for (const [u, v] of blueEdges) {
        adjListBlue[u].push(v)
    }
    
    const res = new Array(n).fill(-1)
    const queue = []
    const visited = new Set()

    queue.push({ node: 0, length: 0, prevColor: null })
    
    while (queue.length) {
        const { node, length, prevColor } = queue.shift()
        
        if (res[node] === -1) {
            res[node] = length
        }
        
        if (prevColor !== 'red') {
            for (const neighbour of adjListRed[node]) {
                const objStr = toString(neighbour, 'red')
                
                if (visited.has(objStr)) {
                    continue
                }
                
                visited.add(objStr)
                queue.push({ node: neighbour, length: length + 1, prevColor: 'red' })
            }
        }
        
        if (prevColor !== 'blue') {
            for (const neighbour of adjListBlue[node]) {
                const objStr = toString(neighbour, 'blue')
                
                if (visited.has(objStr)) {
                    continue
                }
                
                visited.add(objStr)
                queue.push({ node: neighbour, length: length + 1, prevColor: 'blue' })
            }
        }
    }
    
    return res
};
    
function toString(node, prevColor) {
    return JSON.stringify({ node, prevColor })
}