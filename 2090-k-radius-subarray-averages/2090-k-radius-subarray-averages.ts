function getAverages(nums: number[], k: number): number[] {
    const n = nums.length
    const size = 2 * k + 1
    const res = []
    let runningSum = 0
    let left = 0
    let right = left + size - 1
    
    for (let i = 0; i < n; i++) {
        if (i - k < 0 || i + k >= n) {
            res.push(-1)
        } else {
            if (runningSum === 0) {
                for (let j = 0; j <= i + k; j++) {
                    runningSum += nums[j]
                }
            } else {
                runningSum -= nums[left]
                left++
                right++
                runningSum += nums[right]
            }
            
            res.push(Math.floor(runningSum / size))
        }
    }
    
    return res
};