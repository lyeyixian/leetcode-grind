function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = createSet(nums1)
    const set2 = createSet(nums2)
    
    const res1 = findDifferenceInSet1(set1, set2)
    const res2 = findDifferenceInSet1(set2, set1)
    
    return [res1, res2]
};

function createSet(arr) {
    const set = new Set()
    
    for (const num of arr) {
        set.add(num)
    }
    
    return set
}

function findDifferenceInSet1(set1, set2) {
    const res = []
    
    for (const num of set1.values()) {
        if (!set2.has(num)) {
            res.push(num)
        }
    }
    
    return res
}

// function findDifference(nums1: number[], nums2: number[]): number[][] {
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
    
//     const newNums1 = removeDuplicate(nums1)
//     const newNums2 = removeDuplicate(nums2)
//     let ptr1 = 0
//     let ptr2 = 0
    
//     while (ptr1 < newNums1.length && ptr2 < newNums2.length) {
//         const num1 = newNums1[ptr1]
//         const num2 = newNums2[ptr2]
        
//         if (num1 < num2) {
//             ptr1++
//         } else if (num1 > num2) {
//             ptr2++
//         } else {
//             while (ptr1 < newNums1.length && newNums1[ptr1] === num1) {
//                 newNums1[ptr1] = null
//                 ptr1++    
//             }
            
//             while (ptr2 < newNums2.length && newNums2[ptr2] === num2) {
//                 newNums2[ptr2] = null
//                 ptr2++
//             }
//         }
//     }
    
//     return [newNums1.filter(num => num !== null), newNums2.filter(num => num !== null)]
// };

// function removeDuplicate(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] === arr[i]) {
//             arr[i - 1] = null
//         }
//     }
    
//     return arr.filter(num => num !== null)
// }