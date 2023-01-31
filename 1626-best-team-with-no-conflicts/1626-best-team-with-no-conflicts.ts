// similar to Longest Increasing Subsequence (LIS) dp problem
// dp[i] = max(dp[i], currentScore + dp[j]) for 0 < j < i
function bestTeamScore(scores: number[], ages: number[]): number {
    const scoresAges = []
    
    for (let i = 0; i < scores.length; i++) {
        scoresAges.push({ score: scores[i], age: ages[i] })
    }
    
    scoresAges.sort((a, b) => { 
        return a.score === b.score 
            ? a.age - b.age 
            : a.score - b.score
    })
    
    const dp = scoresAges.map(scoreAge => scoreAge.score)
    
    for (let i = 0; i < scoresAges.length; i++) {
        const { score: maxScore, age: maxAge } = scoresAges[i]
        
        for (let j = 0; j < i; j++) {
            const { score, age } = scoresAges[j]
            
            if (maxAge >= age) {
                dp[i] = Math.max(dp[i], dp[j] + maxScore)
            }
        }
    }
    
    return Math.max(...dp)
};