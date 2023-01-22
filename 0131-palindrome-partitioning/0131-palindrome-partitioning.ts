function partition(s: string): string[][] {
    const res = []
    
    helper(0, s, [], res)
    
    return res
};

function helper(index, s, currentPartition, res) {
    if (index === s.length) {
        res.push([...currentPartition])
        
        return
    }
    
    for (let j = index; j < s.length; j++) {
        if (isPalindrome(index, j, s)) {
            currentPartition.push(s.substring(index, j + 1))
            helper(j + 1, s, currentPartition, res)
            currentPartition.pop()
        }
    }
}

function isPalindrome(left, right, s) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        
        left++
        right--
    }
    
    return true
}