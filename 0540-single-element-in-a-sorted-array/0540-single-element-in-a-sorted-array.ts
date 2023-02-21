function singleNonDuplicate(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0]
    }
    
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i]
        const num2 = nums[i + 1]
        
        if (num1 !== num2) {
            return num1
        }
        
        i++
    }
};