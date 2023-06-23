function longestArithSeqLength(nums: number[]): number {
    const n = nums.length
    const dp = {}
    let max = 0
    
    for (let i = 0; i < n; i++) {
        dp[i] = {}
        
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j]
            
            dp[i][diff] = (dp?.[j]?.[diff] || 1) + 1
            max = Math.max(max, dp[i][diff])
        }
    }
    
    return max
};