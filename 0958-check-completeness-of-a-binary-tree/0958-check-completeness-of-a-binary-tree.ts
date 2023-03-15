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

function isCompleteTree(root: TreeNode | null): boolean {
    if (!root) {
        return true
    }
    
    const queue = [root]
    let encounterNull = false
    
    while (queue.length) {
        const currentLength = queue.length
        
        for (let i = 0; i < currentLength; i++) {
            const node = queue.shift()
            
            if (!node) {
                encounterNull = true
                continue
            }
            
            if (encounterNull) {
                return false
            }
            
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    
    return true
};
// 1
// 2 3
// 4 5 6 7
// 8 9 10 11 12 13 null null
// 15