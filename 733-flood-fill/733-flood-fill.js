/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const fixedColor = image[sr][sc]
    const visited = []
    
    for (let i = 0; i < image.length; i++) {
        visited[i] = []
        
        for (let j = 0; j < image[0].length; j++) {
            visited[i][j] = false
        }
    }
    
    function fill(row, col) {
        if (row < 0 || col < 0 || row >= image.length || col >= image[0].length || image[row][col] !== fixedColor || visited[row][col]) {
            return
        }
        
        visited[row][col] = true
        image[row][col] = newColor
        
        fill(row + 1, col)
        fill(row - 1, col)
        fill(row, col + 1)
        fill(row, col - 1)
    }
    
    fill(sr, sc)
    
    return image
};