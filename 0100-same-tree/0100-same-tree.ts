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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queueP = []
    const queueQ = []
    
    queueP.push(p)  
    queueQ.push(q)    

    while (queueP.length && queueQ.length) {
        const nodeP = queueP.shift()
        const nodeQ = queueQ.shift()
        
        if (!nodeP && !nodeQ) {
            continue
        }
        
        if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
            return false
        }
        
        
        queueP.push(nodeP.left)
        queueQ.push(nodeQ.left)
        queueP.push(nodeP.right)
        queueQ.push(nodeQ.right)
    }
    
    return true
};

// Recursive solution
//
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (!p && !q) {
//         return true
//     }
    
//     if (!p || !q) {
//         return false
//     }
    
//     return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// };