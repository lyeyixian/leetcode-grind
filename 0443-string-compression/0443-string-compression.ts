function compress(chars: string[]): number {
    let i = 0
    let length = 0
    
    while (i < chars.length) {
        let count = 1
        
        while (chars[i + count] === chars[i]) {
            count++
        }
        
        chars[length] = chars[i]
        length++
        
        if (count > 1) {
            for (const char of count.toString().split('')) {
                chars[length] = char
                length++
            }
        }
        
        i += count
    }
    
    return length
};