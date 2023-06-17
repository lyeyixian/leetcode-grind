function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
    const mem = new Map()
    
    arr2.sort((a, b) => a - b)
    
    function dp(i, prev) {
        if (i >= arr1.length) {
            return 0
        }
        
        const key = [i, prev].join(',')
        
        if (mem.has(key)) {
            return mem.get(key)
        }
        
        let cost = Infinity
        
        if (arr1[i] > prev) {
            cost = dp(i + 1, arr1[i])
        }
        
        const idxOfSmallestGreater = binarySearch(arr2, prev)
        
        if (idxOfSmallestGreater < arr2.length) {
            cost = Math.min(cost, 1 + dp(i + 1, arr2[idxOfSmallestGreater]))
        }
        
        mem.set(key, cost)
        
        return cost
    }
    
    const res = dp(0, -1)
    
    return res === Infinity ? -1 : res
};

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        if (arr[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return right
}