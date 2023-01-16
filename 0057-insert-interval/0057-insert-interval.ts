function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res = []
    
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]
        
        if (newInterval[0] > interval[1]) {
            res.push(interval)
        } else if (newInterval[1] < interval[0]) {
            res.push(newInterval)
            res.push(...intervals.slice(i))
            
            return res
        } else {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])]
        }
    }
    
    res.push(newInterval)
    
    return res
};