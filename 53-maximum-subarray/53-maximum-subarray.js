/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let globalMax = nums[0]
    let localMax = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        
        localMax = Math.max(num, localMax + num)
        globalMax = Math.max(globalMax, localMax)
    }
    
    return globalMax
};