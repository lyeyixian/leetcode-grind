function maxScore(nums: number[]): number {
    const n = nums.length
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    const mem = new Map()
    
    function dp(mask, operation) {
        if (mem.has(mask)) {
            return mem.get(mask)
        }
        
        let res = 0
        
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const pickI = 1 << i
                const pickJ = 1 << j
                const alrPickedIAndJ = pickI & mask || pickJ & mask
                
                if (alrPickedIAndJ) {
                    continue
                }
                
                const score = operation * gcd(nums[i], nums[j])
                const newMask = mask | pickI | pickJ // mark i and j as picked
                
                res = Math.max(res, score + dp(newMask, operation + 1))
            }
        }
        
        mem.set(mask, res)
        
        return res
    }
    
    return dp(0, 1)
};