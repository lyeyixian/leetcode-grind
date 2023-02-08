function jump(nums: number[]): number {
//     const dp = new Array(nums.length).fill(Infinity)
    
//     dp[0] = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         const numJump = nums[i]
        
//         for (let j = 1; j <= numJump && i + j < nums.length; j++) {
//             const nextIdx = i + j
            
//             dp[nextIdx] = Math.min(dp[nextIdx], dp[i] + 1)
//         }
//     }
    
//     return dp[nums.length - 1]
    return jump2(nums)
};

// non-dp solution
function jump2(nums: number[]): number {
    let res = 0
    let left = 0
    let right = 0
    
    while (right < nums.length - 1) {
        let farthestCanReach = 0
        
        for (let i = left; i <= right; i++) {
            farthestCanReach = Math.max(farthestCanReach, i + nums[i])
        }
        
        left = right + 1
        right = farthestCanReach
        res++
    }
    
    return res
}