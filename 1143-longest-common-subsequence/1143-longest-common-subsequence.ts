function longestCommonSubsequence(text1: string, text2: string): number {
    const dp = []
    
    for (let i = 0; i < text1.length + 1; i++) {
        dp[i] = []
        
        for (let j = 0; j < text2.length + 1; j++) {
            dp[i][j] = 0
        }
    }
    
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[text1.length][text2.length]
};