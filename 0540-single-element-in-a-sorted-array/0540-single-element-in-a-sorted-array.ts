function singleNonDuplicate(nums: number[]): number {
    let left = 0
    let right = nums.length
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const currNum = nums[mid]
        
        if (currNum !== nums[mid - 1] && currNum !== nums[mid + 1]) {
            return currNum
        }
        
        const leftSize = currNum === nums[mid - 1] ? mid - 1 : mid
        
        if (leftSize % 2) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
};