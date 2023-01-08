function maxPoints(points: number[][]): number {
    const totalPoints = points.length
    
    if (totalPoints < 2) {
        return totalPoints
    }
    
    let globalMax = 0
    
    for (let i = 0; i < totalPoints; i++) {
        let localMax = 0
        let verticalPointCount = 0
        const map = new Map()
        const x1 = points[i][0]
        const y1 = points[i][1]
        
        for (let j = i + 1; j < totalPoints; j++) {
            const x2 = points[j][0]
            const y2 = points[j][1]
            
            if (x1 === x2) {
                verticalPointCount++
            } else {
                let dx = x2 - x1
                let dy = y2 - y1
                const g = gcd(dx, dy)
                
                dx = Math.floor(dx / g)
                dy = Math.floor(dy / g)
                
                const keyStr = [dx, dy].join('')
                
                if (!map.has(keyStr)) {
                    map.set(keyStr, 0)
                }
                
                map.set(keyStr, map.get(keyStr) + 1)
                localMax = Math.max(localMax, map.get(keyStr))
            }
            
            localMax = Math.max(localMax, verticalPointCount)
        }
        
        globalMax = Math.max(globalMax, localMax + 1)
    }
    
    return globalMax
};

function gcd(a, b) {
    if (!b) {
        return a
    }
    
    return gcd(b, a % b)
}