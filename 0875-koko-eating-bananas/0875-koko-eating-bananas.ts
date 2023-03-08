function minEatingSpeed(piles: number[], h: number): number {
    function can(k) {
        return piles.map(pile => Math.ceil(pile / k)).reduce((a, b) => a + b) <= h
    }
    
    let left = 1
    let right = Math.max(...piles)
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        if (can(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return left
};

