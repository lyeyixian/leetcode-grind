/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    const res = []
    
    res.push(intervals[0])
    
    for (let i = 1; i < intervals.length; i++) {
        const prevInterval = res.pop()
        const currentInterval = intervals[i]
        const currentLeft = currentInterval[0]
        const currentRight = currentInterval[1]
        
        if (currentLeft <= prevInterval[1]) {
            res.push([prevInterval[0], Math.max(prevInterval[1], currentRight)])
        } else {
            res.push(prevInterval)
            res.push(currentInterval)
        }
    }
    
    return res
};