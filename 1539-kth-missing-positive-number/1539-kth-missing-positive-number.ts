function findKthPositive(arr: number[], k: number): number {
    let missingNumCount = 0
    let idx = 0
    
    for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
        if (i !== arr[idx]) {
            missingNumCount++
        } else {
            idx++
        }
        
        if (missingNumCount === k) {
            return i
        }
    }
};