function predictPartyVictory(senate: string): string {
    const n = senate.length
    const rQueue = []
    const dQueue = []
    
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            rQueue.push(i)
        } else {
            dQueue.push(i)
        }
    }
    
    while (rQueue.length && dQueue.length) {
        const rIdx = rQueue.shift()
        const qIdx = dQueue.shift()
        
        if (rIdx < qIdx) {
            rQueue.push(rIdx + n)
        } else {
            dQueue.push(qIdx + n)
        }
    }
    
    return rQueue.length ? 'Radiant' : 'Dire'
}

// function predictPartyVictory(senate: string): string {
//     function ban(char, fromIndex) {
//         while (true) {
//             if (senate[fromIndex] === char && !banned[fromIndex]) {
//                 banned[fromIndex] = true
//                 return
//             }
            
//             fromIndex++
//             fromIndex %= n
//         }
//     }
    
//     const n = senate.length
//     const banned = new Array(n).fill(false)
//     let radiantCount = senate.split('').filter(char => char === 'R').length
//     let direCount = n - radiantCount
//     let index = 0
    
//     while (radiantCount > 0 && direCount > 0) {
//         if (!banned[index]) {
//             if (senate[index] === 'R') {
//                 ban('D', (index + 1) % n)
//                 direCount--
//             } else {
//                 ban('R', (index + 1) % n)
//                 radiantCount--
//             }    
//         }
        
//         index++
//         index %= n
//     }
    
//     return direCount === 0 ? 'Radiant' : 'Dire'
// }