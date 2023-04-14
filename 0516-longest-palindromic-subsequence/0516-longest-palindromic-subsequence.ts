function longestPalindromeSubseq(s: string): number {
    const reversedS = []
    
    for (let i = s.length - 1; i >= 0 ; i--) {
        reversedS.push(s[i])
    }
    
    return longestCommonSubsequence(s, reversedS.join(''))
};

function longestCommonSubsequence(text1: string, text2: string): number {
    const dp = []
    const n = text1.length
    const m = text2.length
    
    for (let i = 0; i < n + 1; i++) {
        dp[i] = []
        
        for (let j = 0; j < m + 1; j++) {
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
    
    return dp[n][m]
};