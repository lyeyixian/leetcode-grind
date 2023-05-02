function arraySign(nums: number[]): number {
    let count = 0
    
    for (const num of nums) {
        if (num === 0) {
            return 0
        }
        
        if (num < 0) {
            count++
        }
    }
    
    return count % 2 ? -1 : 1
};