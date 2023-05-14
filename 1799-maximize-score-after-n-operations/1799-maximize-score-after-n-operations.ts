function maxScore(nums: number[]): number {
    const n = nums.length
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
                const newMask = mask | pickI | pickJ
                
                res = Math.max(res, score + dp(newMask, operation + 1))
            }
        }
        
        mem.set(mask, res)
        
        return res
    }
    
    return dp(0, 1)
};

function gcd(a, b) {
    if (b === 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}