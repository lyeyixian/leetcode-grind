function bulbSwitch(n: number): number {
    return Math.floor(Math.sqrt(n))
};

// function bulbSwitch(n: number): number {
//     if (n === 0 || n === 1) {
//         return n
//     }
    
//     const bulbs = new Array(n).fill(true)
    
//     for (let i = 0; i < bulbs.length; i++) {
//         if (i % 2) {
//             bulbs[i] = false
//         }
//     }
    
//     for (let round = 3; round <= n; round++) {
//         if (round === n) {
//             bulbs[n - 1] = !bulbs[n - 1]
//         } else {
//             for (let i = 0; i < bulbs.length; i++) {
//                 if (i % round === round - 1) {
//                     bulbs[i] = !bulbs[i]
//                 }
//             }
//         }
//     }
    
//     return bulbs.filter(bulb => bulb).length
// };