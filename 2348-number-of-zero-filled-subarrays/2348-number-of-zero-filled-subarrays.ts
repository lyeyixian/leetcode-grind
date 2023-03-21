function zeroFilledSubarray(nums: number[]): number {
    function sumTo(n) {
        return n * (n + 1) / 2
    }
    
    let count = 0
    let sum = 0
    
    for (const num of nums) {
        if (num === 0) {
            count++
        } else {
            sum += sumTo(count)
            count = 0
        }
    }
    
    sum += sumTo(count)
    
    return sum
};