/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 0)
        }
        
        map.set(num, map.get(num) + 1)
    }
    
    const arr = new Array(nums.length + 1).fill([])
    
    for (const key of map.keys()) {
        const value = map.get(key)
        
        arr[value] = [...arr[value], key]
    }
    
    const res = []
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (res.length >= k) {
            break
        }
        
        const items = arr[i]
        
        if (items.length) {
            res.push(...items)
        }
    }
    
    return res.slice(0, k)
};