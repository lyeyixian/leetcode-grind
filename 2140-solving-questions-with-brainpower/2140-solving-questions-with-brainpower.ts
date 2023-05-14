function mostPoints(questions: number[][]): number {
    const n = questions.length
    const mem = new Array(n).fill(-1)
    
    function dp(i) {
        if (i >= n) {
            return 0
        }
        
        if (mem[i] !== -1) {
            return mem[i]
        }
        
        const [points, toSkip] = questions[i]
        
        mem[i] = Math.max(points + dp(i + 1 + toSkip), dp(i + 1))
        
        return mem[i]
    }
    
    return dp(0)
};