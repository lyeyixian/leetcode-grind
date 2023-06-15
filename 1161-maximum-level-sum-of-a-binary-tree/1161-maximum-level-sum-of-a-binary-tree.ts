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

function maxLevelSum(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    
    const queue = [root]
    let level = 1
    let res = 1
    let max = -Infinity
    
    while (queue.length) {
        const len = queue.length
        let sum = 0
        
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            
            sum += node.val
            
            if (node.left) {
                queue.push(node.left)    
            }
            
            if (node.right) {
                queue.push(node.right)    
            }
        }
        
        if (sum > max) {
            max = sum
            res = level
        }
        
        level++
    }
    
    return res
};

//         -100

//     -200    -300

//   -20  -5 -10   null