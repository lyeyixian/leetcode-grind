function findDifference(nums1: number[], nums2: number[]): number[][] {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    
    for (let i = 1; i < nums1.length; i++) {
        if (nums1[i - 1] === nums1[i]) {
            nums1[i - 1] = null
        }
    }
    
    for (let i = 1; i < nums2.length; i++) {
        if (nums2[i - 1] === nums2[i]) {
            nums2[i - 1] = null
        }
    }
    
    const newNums1 = nums1.filter(num => num !== null)
    const newNums2 = nums2.filter(num => num !== null)
    let ptr1 = 0
    let ptr2 = 0
    
    while (ptr1 < newNums1.length && ptr2 < newNums2.length) {
        const num1 = newNums1[ptr1]
        const num2 = newNums2[ptr2]
        
        if (num1 === num2) {
            while (ptr1 < newNums1.length && newNums1[ptr1] === num1) {
                newNums1[ptr1] = null
                ptr1++    
            }
            
            while (ptr2 < newNums2.length && newNums2[ptr2] === num2) {
                newNums2[ptr2] = null
                ptr2++
            }
        } else {
            if (num1 < num2) {
                ptr1++
            } else {
                ptr2++
            }
        }
    }
    
    return [newNums1.filter(num => num !== null), newNums2.filter(num => num !== null)]
};