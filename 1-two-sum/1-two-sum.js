/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = {}
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num
        
        if (complement in hashTable) {
            return [hashTable[complement], i]
        }
        
        hashTable[num] = i
    }
    
    return []
};