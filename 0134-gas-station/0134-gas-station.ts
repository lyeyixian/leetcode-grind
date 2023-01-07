function canCompleteCircuit(gas: number[], cost: number[]): number {
    const newCircuit = transformCircuit(gas, cost)
    
    if (newCircuit.reduce((a, b) => a + b) < 0) {
        return -1
    }
    
    let currSum = 0
    let startingIdx = 0
    
    for (let i = 0; i < newCircuit.length; i++) {
        currSum += newCircuit[i]
        
        if (currSum < 0) {
            currSum = 0
            startingIdx = i + 1
        }
    }
    
    return startingIdx
    
//     // there is no need to wrap around
//     const length = newCircuit.length
//     let startingIdx = 0
//     let currPtr = wrapPtr(startingIdx + 1, length)
//     let currSum = newCircuit[startingIdx]
//     let gasStationVisited = startingIdx === currPtr ? 1 : 2
    
//     while (gasStationVisited <= length + 1) {
//         currSum += newCircuit[currPtr]
        
//         if (currSum < 0 || newCircuit[startingIdx] < 0) {
//             currSum -= (newCircuit[startingIdx] + newCircuit[currPtr])
//             gasStationVisited--
//             startingIdx = wrapPtr(startingIdx + 1, length)
            
//             if (startingIdx === currPtr) {
//                 currPtr = wrapPtr(currPtr + 1, length)
//                 currSum += newCircuit[startingIdx]
//                 gasStationVisited++
//             }
            
//             continue
//         }
        
//         currPtr = wrapPtr(currPtr + 1, length)
//         gasStationVisited++
//     }
    
//     return startingIdx
};

function transformCircuit(gas, cost) {
    const arr = []
    
    for (let i = 0; i < gas.length; i++) {
        const x = gas[i]
        const y = cost[i]
        
        arr.push(x - y)
    }
    
    return arr
}
    
// function wrapPtr(ptr, length) {
//     return ptr % length
// }
