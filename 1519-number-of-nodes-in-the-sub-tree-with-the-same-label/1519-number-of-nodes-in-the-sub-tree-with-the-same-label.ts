function countSubTrees(n: number, edges: number[][], labels: string): number[] {
    const adjList = []
    const res = []
    
    for (let i = 0; i < n; i++) {
        adjList.push([])
        res.push(0)
    }
    
    for (const [u, v] of edges) {
        adjList[u].push(v)
        adjList[v].push(u)
    }
    
    dfs(0, -1, adjList, labels, res)
    
    return res
};

function dfs(node, parent, adjList, labels, res) {
    const currentLabelFreq = new Array(26).fill(0)
    
    for (const child of adjList[node]) {
        if (child === parent) {
            continue
        }
        
        const childLabelFreq = dfs(child, node, adjList, labels, res)
        
        for (let i = 0; i < currentLabelFreq.length; i++) {
            currentLabelFreq[i] += childLabelFreq[i]
        }
    }
    
    const index = labels[node].charCodeAt(0) - 'a'.charCodeAt(0)
    currentLabelFreq[index]++
    res[node] = currentLabelFreq[index]
    
    return currentLabelFreq
}