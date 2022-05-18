/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {    
    const res = []
    
    while (intervals.length) {
        const interval = intervals.shift()
        const left = interval[0]
        const right = interval[1]
        const newLeft = newInterval[0]
        const newRight = newInterval[1]
        
        if (newLeft > right) {
            res.push(interval)
        } else if (newRight < left) {
            res.push(newInterval)
            res.push(interval)
            res.push(...intervals)
            
            return res
        } else {
            newInterval[0] = Math.min(left, newLeft)
            newInterval[1] = Math.max(right, newRight)
        }
    }
    
    res.push(newInterval)
    
    return res
};