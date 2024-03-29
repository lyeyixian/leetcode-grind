function findSubsequences(nums: number[]): number[][] {
    const set: Set<string> = new Set()
    let sequence = []
    
    helper(0, nums, sequence, set)
    
    const res = []
    
    for (const str of set.values()) {
        res.push(str.split(',').map(numStr => parseInt(numStr)))    
    }
    
    return res
};

function helper(index, nums, sequence, set) {
    // reaching the end of nums
    if (index === nums.length) {
        if (sequence.length >= 2) {
            set.add(sequence.join(','))    
        }
        
        return
    }
    
    // add current num to sequence
    if (!sequence.length || sequence[sequence.length - 1] <= nums[index]) {
        sequence.push(nums[index])
        helper(index + 1, nums, sequence, set)
        sequence.pop()
    }
    
    // don't add the current num to sequence
    helper(index + 1, nums, sequence, set)
}