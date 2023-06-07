function minFlips(a: number, b: number, c: number): number {
    function peekLSB(num) {
        return num & 1
    }
    
    let count = 0
    
    while (a || b || c) {
        if (peekLSB(c)) {
            if (peekLSB(a) === 0 && peekLSB(b) === 0) {
                count++
            }
        } else {
            count += peekLSB(a) + peekLSB(b)
        }
        
        a >>= 1
        b >>= 1
        c >>= 1
    }
    
    return count
}

// turn to string: not so efficient
// function minFlips(a: number, b: number, c: number): number {
//     function toBinaryStr(num) {
//         return num.toString(2)
//     }
    
//     const arrA = toBinaryStr(a).split('')
//     const lenA = arrA.length
//     const arrB = toBinaryStr(b).split('')
//     const lenB = arrB.length
//     const arrC = toBinaryStr(c).split('')
//     const lenC = arrC.length
//     const maxLength = Math.max(lenA, lenB, lenC)
    
//     if (lenA < maxLength) {
//         const diff = maxLength - lenA
//         arrA.unshift(...'0'.repeat(diff).split(''))
//     }
    
//     if (lenB < maxLength) {
//         const diff = maxLength - lenB
//         arrB.unshift(...'0'.repeat(diff).split(''))
//     }
    
//     if (lenC < maxLength) {
//         const diff = maxLength - lenC
//         arrC.unshift(...'0'.repeat(diff).split(''))
//     }
    
//     let count = 0
    
//     for (let i = 0; i < maxLength; i++) {
//         const bitA = arrA[i]
//         const bitB = arrB[i]
//         const bitC = arrC[i]
        
//         if (bitC === '1') {
//             if (bitA === '0' && bitB === '0') {
//                 count++    
//             }
//         } else {
//             if (bitA === '1') {
//                 count++
//             }
            
//             if (bitB === '1') {
//                 count++
//             }
//         }
//     }
    
//     return count
// };