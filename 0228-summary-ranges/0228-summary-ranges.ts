function summaryRanges(nums: number[]): string[] {
    function toAns(a, b) {
        return a !== b ? `${a}->${b}` : a.toString()
    }
    let left = nums[0]
    let right = nums[0]
    const res = []
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (nums[i + 1] === num + 1) {
            right = nums[i + 1]
        } else {
            res.push(toAns(left, right))
            left = nums[i + 1]
            right = nums[i + 1]
        }
    }
    
    return res
};