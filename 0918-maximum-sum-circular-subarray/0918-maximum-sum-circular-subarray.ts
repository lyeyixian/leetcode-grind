function maxSubarraySumCircular(nums: number[]): number {
    let localMax = 0
    let globalMax = -Infinity
    let localMin = 0
    let globalMin = Infinity
    let sum = 0
    
    for (const num of nums) {
        localMax = Math.max(num, localMax + num)
        globalMax = Math.max(globalMax, localMax)
        localMin = Math.min(num, localMin + num)
        globalMin = Math.min(globalMin, localMin)
        sum += num
    }
    
    return globalMax < 0
        ? globalMax
        : Math.max(globalMax, sum - globalMin)
};