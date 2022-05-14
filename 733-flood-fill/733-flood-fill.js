/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image
    }
    
    const DIRECTION = [0, 1, 0, -1, 0]
    const fixedColor = image[sr][sc]
    const queue = []
    
    image[sr][sc] = newColor
    queue.push([sr, sc])
    
    while (queue.length) {
        const current = queue.shift()
        
        for (let i = 0; i < DIRECTION.length - 1; i++) {
            const row = current[0] + DIRECTION[i]
            const col = current[1] + DIRECTION[i + 1]
            
            if (row < 0 || col < 0 || row >= image.length || col >= image[0].length || image[row][col] !== fixedColor) {
                continue
            }
            
            image[row][col] = newColor
            queue.push([row, col])
        }
    }
    
    return image
};

// var floodFill = function(image, sr, sc, newColor) {
//     const fixedColor = image[sr][sc]
    
//     if (image[sr][sc] === newColor) {
//         return image
//     }
    
//     function fill(row, col) {
//         if (row < 0 || col < 0 || row >= image.length || col >= image[0].length || image[row][col] !== fixedColor) {
//             return
//         }
        
//         image[row][col] = newColor
        
//         fill(row + 1, col)
//         fill(row - 1, col)
//         fill(row, col + 1)
//         fill(row, col - 1)
//     }
    
//     fill(sr, sc)
    
//     return image
// };