/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): number {
    const queue = [{ node: root, val: 1n, level: 0 }]
    let currentLevel = 0
    let firstNodeVal = 1n
    let res = 0n
    
    while (queue.length) {
        const { node, val, level } = queue.shift()
        
        if (level > currentLevel) {
            currentLevel = level
            firstNodeVal = val
        }
        
        const width = val - firstNodeVal + 1n
        
        if (width > res) {
            res = width
        }
        
        if (node.left) {
            queue.push({
                node: node.left,
                val: 2n * val,
                level: level + 1
            })
        }
        
        if (node.right) {
            queue.push({
                node: node.right,
                val: 2n * val + 1n,
                level: level + 1
            })
        }
    }
    
    return Number(res)
};