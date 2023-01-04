function minimumRounds(tasks: number[]): number {
    const map = new Map()
    
    for (const level of tasks) {
        if (!map.has(level)) {
            map.set(level, 0)
        }
        
        map.set(level, map.get(level) + 1)
    }
    
    let round = 0
    
    for (const freq of map.values()) {
        if (freq === 1) {
            return -1
        }
        
        const remainder = freq % 3
        
        if (remainder === 0) {
            round += freq / 3
        } else {
            round += Math.floor(freq / 3) + 1
        }
    }
    
    return round
};