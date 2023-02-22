function shipWithinDays(weights: number[], days: number): number {
    let maxLoad = 0
    let totalLoad = 0
    
    for (const weight of weights) {
        totalLoad += weight
        maxLoad = Math.max(weight, maxLoad)
    }
    
    let left = maxLoad
    let right = totalLoad

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        if (canShip(mid, weights, days)) {
            // current mid can still be the answer, so keep it
            right = mid
        } else {
            // current mid is definitely not the answer, so skip it
            left = mid + 1
        }
    }
    
    return right
};

function canShip(capacity, weights, days) {
    let currentCapacity = 0
    let currentDay = 1
    
    for (const weight of weights) {
        if (currentCapacity + weight > capacity) {
            currentCapacity = 0
            currentDay++
        }
        
        currentCapacity += weight
    }

    return currentDay <= days
}