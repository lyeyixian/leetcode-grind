function longestPath(parent: number[], s: string): number {
    const adjList = []
    
    for (let i = 0; i < parent.length; i++) {
        adjList.push([])
    }
    
    for (let i = 1; i < parent.length; i++) {
        const par = parent[i]
        const child = i
        
        adjList[par].push(child)
        adjList[child].push(par)
    }
    
    const res = {
        value: 1
    }
    
    dfs(0, -1, adjList, s, res)
    
    return res.value
};

function dfs(node, parent, adjList, s, res) {
    let longestChild = 0
    let secondLongestChild = 0
    
    for (const child of adjList[node]) {
        if (child === parent) {
            continue
        }
        
        const length = dfs(child, node, adjList, s, res)
        
        if (s[node] === s[child]) {
            continue
        }
        
        if (length > longestChild) {
            secondLongestChild = longestChild
            longestChild = length
        } else if (length > secondLongestChild) {
            secondLongestChild = length
        }
    }
    
    res.value = Math.max(res.value, longestChild + secondLongestChild + 1)
    
    return longestChild + 1
}