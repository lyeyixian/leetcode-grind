/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList.push([])
    }
    
    for (const [u, v] of edges) {
        adjList[u].push(v)
        // need do this becos the given edges list might only have 1 direction
        // or becos it is undirected graph
        adjList[v].push(u)
    }

    return dfs(0, -1, adjList, hasApple)
};

function dfs(node, parent, adjList, hasApple) {
    let time = 0
    
    for (const v of adjList[node]) {
        // this is to prevent visiting the parent
        if (v === parent) {
            continue
        }
        
        const childTime = dfs(v, node, adjList, hasApple)
        
        if (childTime || hasApple[v]) {
            time += childTime + 2
        }
    }
    
    return time
}