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
        adjList[v].push(u)
    }

    return dfs(0, -1, adjList, hasApple)
};

function dfs(node, parent, adjList, hasApple) {
    let time = 0
    
    for (const v of adjList[node]) {
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