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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }
    
    const queue = [root]
    const res = []
    let leftToRight = true
    
    while (queue.length) {
        const length = queue.length
        let currentLevel = []
        
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            
            currentLevel.push(node.val)
            
            if (node.left) {
                queue.push(node.left)
            }
            
            if (node.right) {
                queue.push(node.right)
            }
        }
        
        if (!leftToRight) {
            currentLevel = reverse(currentLevel)
        }
        
        res.push(currentLevel)
        leftToRight = !leftToRight
    }
    
    return res
};

function reverse(nodes) {
    const res = []
    
    for (let i = nodes.length - 1; i >= 0; i--) {
        res.push(nodes[i])
    }
    
    return res
}