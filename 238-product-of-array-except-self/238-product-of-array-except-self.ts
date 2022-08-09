function productExceptSelf(nums: number[]): number[] {
    const fromLeft = []
    
    fromLeft.push(1)
    
    for (let i = 1; i < nums.length; i++) {
        fromLeft[i] = fromLeft[i - 1] * nums[i - 1]
    }
    
    const fromRight = new Array(nums.length).fill(0)
    
    fromRight[fromRight.length - 1] = 1
    
    for (let i = nums.length - 2; i >= 0; i--) {
        fromRight[i] = fromRight[i + 1] * nums[i + 1]
    }
    
    const res = []
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = fromLeft[i] * fromRight[i]
    }
    
    return res
};