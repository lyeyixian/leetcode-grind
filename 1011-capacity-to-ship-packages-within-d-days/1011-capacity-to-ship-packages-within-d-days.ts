function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights)
    let right = weights.reduce((a, b) => a + b)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        if (canShip(mid, weights, days)) {
            right = mid
        } else {
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