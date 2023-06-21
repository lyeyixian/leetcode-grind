function minCost(nums: number[], cost: number[]): number {
    const n = nums.length
    const numsCost = []
    
    for (let i = 0; i < n; i++) {
        numsCost[i] = { num: nums[i], cost: cost[i] }
    }
    
    numsCost.sort((a, b) => a.num - b.num)
    
    // prefix sum arr of costs
    const prefixCosts = [numsCost[0].cost]
    
    for (let i = 1; i < n; i++) {
        prefixCosts[i] = numsCost[i].cost + prefixCosts[i - 1]
    }
    
    // make every element equals nums[i]
    // start with nums[0]
    let totalCost = 0
    
    for (let i = 1; i < n; i++) {
        const diff = numsCost[i].num - numsCost[0].num
        
        totalCost += numsCost[i].cost * diff
    }
    
    let res = totalCost
    
    // then from nums[1] to nums[i]
    for (let i = 1; i < n; i++) {
        const gap = numsCost[i].num - numsCost[i - 1].num
        const prefix = prefixCosts[i - 1]
        const suffix = prefixCosts[n - 1] - prefixCosts[i - 1]
        
        totalCost += prefix * gap // green space will increase, leading to cost increase
        totalCost -= suffix * gap // red space will decrease, leading to cost decrease
        res = Math.min(res, totalCost)
    }
    
    return res
}

// TLE
// function minCost(nums: number[], cost: number[]): number {
//     function replaceWith(target) {
//         let sum = 0
        
//         for (let i = 0; i < n; i++) {
//             const num = nums[i]
//             const diff = Math.abs(target - num)
            
//             sum += diff * cost[i]
//         }
        
//         return sum
//     }

//     const n = nums.length
//     let min = Infinity
    
//     for (const num of nums) {
//         min = Math.min(min, replaceWith(num))
//     }
    
//     return min
// };