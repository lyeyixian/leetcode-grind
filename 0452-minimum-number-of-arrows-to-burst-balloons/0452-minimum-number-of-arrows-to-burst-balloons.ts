function findMinArrowShots(points: number[][]): number {
    if (!points.length) {
        return 0
    }
    
    points.sort((a, b) => a[1] - b[1])
    
    let arrowCount = 1
    let shotPos = points[0][1]
    
    for (let i = 1; i < points.length; i++) {
        if (shotPos >= points[i][0]) {
            continue
        }
        
        arrowCount++
        shotPos = points[i][1]
    }
    
    return arrowCount
};
