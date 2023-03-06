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
    // left - 1 = the largest index that has num of missing number < k
    //
    // numMissingAtIdx = arr[left - 1] - left
    // howManyMoreMissing = k - numMissingAtIdx
    // res = arr[left - 1] + howManyMoreMissing
    // 
    // arr[left - 1] + k - numMissingAtIdx
    // arr[left - 1] + k - (arr[left - 1] - left)
    // k + left
    
    return k + left
};
// arr:                  [2,3,4,7,11]
// arr[mid] - (mid + 1): [1,1,1,3,6]
// k: 5
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