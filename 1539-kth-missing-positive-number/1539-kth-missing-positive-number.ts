function findKthPositive(arr: number[], k: number): number {
    let left = 0
    let right = arr.length - 1
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const numMissingAtIdx = arr[mid] - (mid + 1)
        
        if (numMissingAtIdx < k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return left + k
};

//     let missingNumCount = 0
//     let idx = 0
    
//     for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
//         if (i !== arr[idx]) {
//             missingNumCount++
//         } else {
//             idx++
//         }
        
//         if (missingNumCount === k) {
//             return i
//         }
//     }