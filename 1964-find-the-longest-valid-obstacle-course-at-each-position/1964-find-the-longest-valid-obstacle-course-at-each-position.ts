function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    const n = obstacles.length
    const res = []
    const lis = [] // lis[i] = the max height of the longest increasing subsequence of length i + 1
    
    for (const height of obstacles) {
        const length = binarySearch(lis, height) // find the longest length (rightmost idx) with the height <= current height
        
        lis[length] = height
        res.push(length + 1)
    }
    
    return res
};

function binarySearch(arr, target) {
    if (arr.length === 0) {
        return 0
    }
    
    let left = 0
    let right = arr.length
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        if (arr[mid] <= target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    
    return left
}

// function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
//     function lisIncluding(i, curr, mem) {
//         if (i < 0) {
//             return 0
//         }
        
//         const key = [i, curr].join(',')
        
//         if (mem.has(key)) {
//             return mem.get(key)
//         }
        
//         let res = 0
//         const obstacle = obstacles[i]
        
//         if (obstacle <= curr) {
//             res = 1 + lisIncluding(i - 1, obstacle, mem)
//         }
        
//         res = Math.max(res, lisIncluding(i - 1, curr, mem))
//         mem.set(key, res)
        
//         return res
//     }
    
//     return obstacles.map((obstacle, idx) => 1 + lisIncluding(idx - 1, obstacle, new Map()))
// };