function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let res = 0
    let leftBound = -1
    let minIdx = -1
    let maxIdx = -1
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]
        
        if (currentNum < minK || currentNum > maxK) {
            leftBound = i
        }
        
        if (currentNum === minK) {
            minIdx = i
        }
        
        if (currentNum === maxK) {
            maxIdx = i
        }
        
        res += Math.max(0, Math.min(minIdx, maxIdx) - leftBound)
    }
    
    return res
};


//     function countSubarray(left, right) {
    
//     }
    
//     let left = 0
//     let res = 0
    
//     for (let right = 0; right < nums.length; right++) {
//         const num = nums[right]
        
//         if (num < minK || num > maxK) {
//             if (right !== 0) {
//                 res += countSubarray(left, right - 1)    
//             }

//             left = right + 1
//         }
        
//         if (right === nums.length - 1 && left <= right) {
//             res += countSubarray(left, right)
//         }
//     }
    
//     return res
