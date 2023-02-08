function jump(nums: number[]): number {
    const dp = new Array(nums.length).fill(Infinity)
    
    dp[0] = 0
    
    for (let i = 0; i < nums.length; i++) {
        const numJump = nums[i]
        
        for (let j = 1; j <= numJump && i + j < nums.length; j++) {
            const nextIdx = i + j
            
            dp[nextIdx] = Math.min(dp[nextIdx], dp[i] + 1)
        }
    }
    
    return dp[nums.length - 1]
};