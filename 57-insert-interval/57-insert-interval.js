/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {    
    const res = []
    
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]
        const left = interval[0]
        const right = interval[1]
        const newLeft = newInterval[0]
        const newRight = newInterval[1]
        
        if (newLeft > right) {
            res.push(interval)
        } else if (newRight < left) {
            res.push(newInterval)
            res.push(...intervals.slice(i))
            
            return res
        } else {
            newInterval[0] = Math.min(left, newLeft)
            newInterval[1] = Math.max(right, newRight)
        }
    }
    
    res.push(newInterval)
    
    return res
};