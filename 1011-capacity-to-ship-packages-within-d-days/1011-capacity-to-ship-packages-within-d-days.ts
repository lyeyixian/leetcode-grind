function shipWithinDays(weights: number[], days: number): number {
    let left = 0
    let right = weights.reduce((a, b) => a + b)
    // 0
    // 8
    // 4
    // 0 3 1
    // 2 3 2
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const canFit = helper(mid, weights, days)
        
        if (canFit) {
            if (!helper(mid - 1, weights, days)) {
                return mid    
            } else {
                right = mid - 1
            }
        } else {
            left = mid + 1
        }
    }
};

function helper(capacity, weights, days) {
    let currentCapacity = 0
    let currentDay = 1
    
    for (const weight of weights) {
        if (currentCapacity + weight > capacity) {
            currentCapacity = weight
            
            if (currentCapacity > capacity) {
                return false
            }
            
            currentDay++
            
            if (currentDay > days) {
                return false
            }
        } else {
            currentCapacity += weight
        }
    }
    
    return true
}