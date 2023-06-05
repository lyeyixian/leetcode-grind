function checkStraightLine(coordinates: number[][]): boolean {
    function getDeltaY(x, y) {
        return x[1] - y[1]
    }
    
    function getDeltaX(x, y) {
        return x[0] - y[0]
    }
    
    const deltaY = getDeltaY(coordinates[1], coordinates[0])
    const deltaX = getDeltaX(coordinates[1], coordinates[0])
    
    for (let i = 2; i < coordinates.length; i++) {
        if (deltaY * getDeltaX(coordinates[i], coordinates[0]) !== deltaX * getDeltaY(coordinates[i], coordinates[0])) {
            return false
        }
    }
    
    return true
};