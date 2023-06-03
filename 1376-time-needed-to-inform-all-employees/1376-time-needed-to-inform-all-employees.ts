function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    const adjList = []
    
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    
    for (let i = 0; i < n; i++) {
        const id = manager[i]
        
        if (id !== -1) {
            adjList[id].push(i)    
        }
    }
    
    function dfs(i) {
        if (informTime[i] === 0) {
            return 0
        }
        
        let res = 0
        
        for (const neighbour of adjList[i]) {
            res = Math.max(res, informTime[i] + dfs(neighbour))
        }
        
        return res
    }
    
    return dfs(headID)
};