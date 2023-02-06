function shuffle(nums: number[], n: number): number[] {
    let left = 0
    let right = n
    const res = []
    
    while (right < 2 * n) {
        res.push(nums[left])
        res.push(nums[right])
        left++
        right++
    }
    
    return res
};