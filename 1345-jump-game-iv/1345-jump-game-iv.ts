function minJumps(arr: number[]): number {
    const map = new Map()
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        
        if (!map.has(num)) {
            map.set(num, [])
        }
        
        map.get(num).push(i)
    }
    
    const queue = [0]
    const visited = new Array(arr.length).fill(false)
    let numSteps = 0
    
    while (queue.length) {
        const len = queue.length
        
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
        
            if (node === arr.length - 1) {
                return numSteps
            }
            
            const prevNode = node - 1
            const nextNode = node + 1
            
            if (prevNode >= 0 && !visited[prevNode]) {
                queue.push(prevNode)
            }
            
            if (nextNode < arr.length && !visited[nextNode]) {
                queue.push(nextNode)
            }
            
            const sameValueNodes = map.get(arr[node])
            
            for (const sameValueNode of sameValueNodes) {
                if (node !== sameValueNode && !visited[sameValueNode]) {
                    queue.push(sameValueNode)
                }
            }
            
            map.set(arr[node], [])
            
            visited[node] = true
        }
        
        numSteps++
    }
    
    return -1
};