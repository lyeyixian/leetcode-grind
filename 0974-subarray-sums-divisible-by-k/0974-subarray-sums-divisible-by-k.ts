function subarraysDivByK(nums: number[], k: number): number {
    let count = 0
    let currentSum = 0
    let prefixMap = new Map()
    
    prefixMap.set(0, 1)
    
    for (const num of nums) {
        currentSum = (currentSum + num % k + k) % k
        
        if (!prefixMap.has(currentSum)) {
            prefixMap.set(currentSum, 0)
        }
        
        count += prefixMap.get(currentSum)
        prefixMap.set(currentSum, prefixMap.get(currentSum) + 1)
    }
    
    return count
};