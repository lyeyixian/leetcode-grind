function countNegatives(grid: number[][]): number {
    const n = grid[0].length
    let count = 0
    let rightBorder = n - 1
    
    for (const row of grid) {
        while (rightBorder >= 0 && row[rightBorder] < 0) {
            rightBorder--
        }
        
        count += n - (rightBorder + 1)
    }
    
    return count
}

// binary search
// function countNegatives(grid: number[][]): number {
//     const n = grid[0].length
//     let count = 0
    
//     for (const row of grid) {
//         let left = 0
//         let right = n - 1
        
//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2)
            
//             if (row[mid] < 0) {
//                 right = mid - 1
//             } else {
//                 left = mid + 1
//             }
//         }
        
//         count += n - left
//     }
    
//     return count
// }

// brute force
// function countNegatives(grid: number[][]): number {
//     const m = grid.length
//     const n = grid[0].length
//     let count = 0
    
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] < 0) {
//                 count++
//             }
//         }
//     }
    
//     return count
// };