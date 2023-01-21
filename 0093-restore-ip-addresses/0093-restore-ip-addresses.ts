function restoreIpAddresses(s: string): string[] {
    if (s.length > 12) {
        return []
    }
    
    const res = []
    
    helper(0, s, [], res)
    
    return res
};

function helper(index, s, ipArr, res) {
    if (index === s.length && ipArr.length === 4) {
        res.push(ipArr.join('.'))
        
        return
    }
    
    if (ipArr.length > 4) {
        return
    }
    
    for (let j = index; j < Math.min(index + 3, s.length); j++) {
        const ipStr = s.substring(index, j + 1)
        
        if (index === j || (s[index] !== '0' && parseInt(ipStr) <= 255)) {
            ipArr.push(ipStr)
            helper(j + 1, s, ipArr, res)
            ipArr.pop()
        }
    }
}