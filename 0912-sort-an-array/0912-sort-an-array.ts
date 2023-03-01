function sortArray(nums: number[]): number[] {
    const n = nums.length
    const tempArr = new Array(n).fill(0)
    
    function merge(left, mid, right) {
        const start1 = left
        const start2 = mid + 1
        const len1 = mid - left + 1
        const len2 = right - mid

        for (let i = 0; i < len1; i++) {
            const index = start1 + i
            tempArr[index] = nums[index]
        }

        for (let i = 0; i < len2; i++) {
            const index = start2 + i
            tempArr[index] = nums[index]
        }

        let originalIndex = left
        let i = 0
        let j = 0

        while (i < len1 && j < len2) {
            const num1 = tempArr[start1 + i]
            const num2 = tempArr[start2 + j]

            if (num1 <= num2) {
                nums[originalIndex] = num1
                i++
            } else {
                nums[originalIndex] = num2
                j++
            }

            originalIndex++
        }

        while (i < len1) {
            nums[originalIndex] = tempArr[start1 + i]
            i++
            originalIndex++
        }

        while (j < len2) {
            nums[originalIndex] = tempArr[start2 + j]
            j++
            originalIndex++
        }
    }
    
    function mergeSort(left, right) {
        if (left >= right) {
            return
        }

        const mid = Math.floor((left + right) / 2)

        mergeSort(left, mid)
        mergeSort(mid + 1, right)
        merge(left, mid, right)
    }
    
    mergeSort(0, n - 1)
    
    return nums
};

