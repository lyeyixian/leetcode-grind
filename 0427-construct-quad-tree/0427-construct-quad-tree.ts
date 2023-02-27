/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
    return dfs(grid.length, 0, 0, grid)
};

function dfs(limit, row, col, grid) {
    let allSameValue = true
    
    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < limit; j++) {
            if (grid[row][col] !== grid[i + row][j + col]) {
                allSameValue = false
                break
            }
        }
        
        if (!allSameValue) {
            break
        }
    }
    
    if (allSameValue) {
        return new Node(grid[row][col], true)
    }
    
    const newLimit = Math.floor(limit / 2)
    const topLeft = dfs(newLimit, row, col, grid)
    const topRight = dfs(newLimit, row, col + newLimit, grid)
    const bottomLeft = dfs(newLimit, row + newLimit, col, grid)
    const bottomRight = dfs(newLimit, row + newLimit, col + newLimit, grid)
    
    return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
}