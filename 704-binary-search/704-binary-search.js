/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2) // take note of int overflow: left - ((right - left) / 2)
        const num = nums[mid]

        if (num === target) {
            return mid
        } else if (num < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
};