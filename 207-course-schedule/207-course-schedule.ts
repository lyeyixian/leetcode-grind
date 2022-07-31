function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjList = []
    const indegree = new Array(numCourses).fill(0)
    
    for (let i = 0; i < numCourses; i++) {
        adjList[i] = []
    }
    
    for (const prerequisite of prerequisites) {
        const toTake = prerequisite[0]
        const needToTakeBefore = prerequisite[1]
        
        adjList[needToTakeBefore].push(toTake)
        indegree[toTake]++
    }
    
    const queue = []
    
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }
    
    let count = 0
    
    while (queue.length) {
        const course = queue.shift()
        
        count++
        
        for (const neighbor of adjList[course]) {
            indegree[neighbor]--
            
            if (indegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }
    
    return count === numCourses
};

// 20
// [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]