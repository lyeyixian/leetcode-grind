function minDistance(word1: string, word2: string): number {
    const dp = []
    const n = word1.length
    const m = word2.length
    
    for (let i = 0; i < n + 1; i++) {
        dp[i] = new Array(m + 1).fill(Infinity)
    }
    
    for (let i = 0; i < n + 1; i++) {
        dp[i][m] = n - i
    }
    
    for (let j = 0; j < m + 1; j++) {
        dp[n][j] = m - j
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1])
            } 
        }
    }
    
    return dp[0][0]
};