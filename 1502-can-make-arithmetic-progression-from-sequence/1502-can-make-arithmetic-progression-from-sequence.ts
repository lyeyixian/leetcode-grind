function canMakeArithmeticProgression(arr: number[]): boolean {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const n = arr.length
    
    // all numbers are equal, so diff is the same for all
    if (max - min === 0) {
        return true
    }
    
    // can form arithmetic progression
    if ((max - min) % (n - 1) !== 0) {
        return false
    }
    
    const diff = (max - min) / (n - 1)
    const set = new Set()
    
    for (const num of arr) {
        if ((num - min) % diff !== 0) {
            return false
        }
        
        set.add(num)
    }
    
    // set is to check if arr is distinct
    return set.size === n
}

// function canMakeArithmeticProgression(arr: number[]): boolean {
//     arr.sort((a, b) => a - b)
    
//     const diff = arr[1] - arr[0]
    
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] - arr[i - 1] !== diff) {
//             return false
//         }
//     }
    
//     return true
// };