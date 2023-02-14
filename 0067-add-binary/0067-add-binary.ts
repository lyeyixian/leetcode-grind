function addBinary(a: string, b: string): string {
    const res = []
    const arrA = a.split('')
    const arrB = b.split('')
    let carry = '0'
    
    while (arrA.length || arrB.length) {
        const numA = arrA.pop() || '0'
        const numB = arrB.pop() || '0'
        
        if (numA === '1' && numB === '1') {
            res.unshift(carry)
            carry = '1'
        } else if (numA === '0' && numB === '0') {
            res.unshift(carry)
            carry = '0'
        } else {
            if (carry === '1') {
                res.unshift('0')
            } else {
                res.unshift('1')
            }
        }
    }
    
    if (carry === '1') {
        res.unshift('1')
    }
    
    return res.join('')
};