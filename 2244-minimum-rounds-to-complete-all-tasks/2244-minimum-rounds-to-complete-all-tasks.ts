function minimumRounds(tasks: number[]): number {
    const map = new Map()
    
    // count the frequency
    for (const level of tasks) {
        if (!map.has(level)) {
            map.set(level, 0)
        }
        
        map.set(level, map.get(level) + 1)
    }
    
    let round = 0
    
    for (const freq of map.values()) {
        // because can only pick 2 or 3, cant pick 1
        if (freq === 1) {
            return -1
        }
        
        // freq = 3k
        if (freq % 3 === 0) {
            round += freq / 3
        } else {
            // freq = 3k + 1
            // ex: 7 = 3 3 --> 3 2 2
            //
            // freq = 3k + 2
            // ex: 8 = 3 3 --> 3 3 2
            // both case need to add 1
            round += Math.floor(freq / 3) + 1
        }
    }
    
    return round
};