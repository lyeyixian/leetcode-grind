function subarraysDivByK(nums: number[], k: number): number {
    let count = 0
    let currentSum = 0
    let prefixMap = new Map()
    
    prefixMap.set(0, 1)
    
    for (const num of nums) {
        currentSum += num
        
        let remainder = currentSum % k
        
        // handle -ve remainder
        if (remainder < 0) {
            remainder += k
        }
        
        if (!prefixMap.has(remainder)) {
            prefixMap.set(remainder, 0)
        }
        
        const remainderCount = prefixMap.get(remainder)
        
        count += remainderCount
        prefixMap.set(remainder, remainderCount + 1)
    }
    
    return count
};