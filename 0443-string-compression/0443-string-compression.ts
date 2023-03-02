function compress(chars: string[]): number {
    const res = []
    let count = 0
    
    for (let i = 0; i < chars.length; i++) {
        if (i === 0) {
            res.push(chars[i])
            count++
        } else {
            if (chars[i] === chars[i - 1]) {
                count++
                
                if (i === chars.length - 1) {
                    if (count > 9) {
                        res.push(...count.toString().split(''))
                    } else {
                        res.push(count.toString())
                    }
                }
            } else {
                if (count > 1) {
                    if (count > 9) {
                        res.push(...count.toString().split(''))
                    } else {
                        res.push(count.toString())
                    }
                }
                
                res.push(chars[i])
                count = 1
            }
        }
    }
    
    let i
    
    for (i = 0; i < res.length; i++) {
        chars[i] = res[i]
    }
    
    for (i; i < chars.length; i++) {
        chars[i] = null
    }
    
    return res.length
};