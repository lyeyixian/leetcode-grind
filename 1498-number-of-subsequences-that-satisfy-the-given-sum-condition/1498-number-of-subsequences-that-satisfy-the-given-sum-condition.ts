function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    
    const modulo = 1000000007
    const power = [1]
    
    // precompute power of 2
    for (let i = 1; i < nums.length; i++) {
        power[i] = (power[i - 1] * 2) % modulo
    }
    
    let res = 0
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res += power[right - left] // got 2 choice for each value from left + 1 to right
            res %= modulo
            left++
        } else {
            right--
        }
    }
    
    return res
};