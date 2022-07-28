/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        let k = nums.length - 1
        
        if (i > 0 && nums[i] === nums[i - 1]) { // skip duplicates after using it
            continue
        }
        
        while (j < k) {
            if (j > i + 1 && nums[j] === nums[j - 1]) { // skip duplicates after using it
                j++
                continue
            }
            
            if (k < nums.length - 1 && nums[k] === nums[k + 1]) { // skip duplicates after using it
                k--
                continue
            }
            
            const x = nums[i]
            const y = nums[j]
            const z = nums[k]
            const sum = x + y + z
            
            if (sum < 0) {
                j++
            } else if (sum > 0) {
                k--
            } else {
                res.push([x, y, z])
                j++
                k--
            }
        }
    }
    
    return res
};