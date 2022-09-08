/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    const res = []
    
    for (const interval of intervals) {
        if (res.length === 0 || res[res.length - 1][1] < interval[0]) {
            res.push(interval)
        } else {
            const prevInterval = res[res.length - 1]
            prevInterval[1] = Math.max(prevInterval[1], interval[1])
        }
    }
    
    return res
};