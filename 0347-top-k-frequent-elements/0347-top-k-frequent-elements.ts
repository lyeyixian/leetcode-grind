function topKFrequent(nums: number[], k: number): number[] {
    const n = nums.length
    const map = new Map()
    
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 0)
        }
        
        map.set(num, map.get(num) + 1)
    }
    
    const freqArr = []
    
    for (let i = 0; i < n + 1; i++) {
        freqArr[i] = []
    }
    
    for (const [key, value] of map.entries()) {
        freqArr[value].push(key)
    }
    
    const res = []
    
    for (let i = freqArr.length - 1; i >= 0; i--) {
        res.push(...freqArr[i])
        
        if (res.length >= k) {
            break
        }
    }
    
    return res.slice(0, k)
};