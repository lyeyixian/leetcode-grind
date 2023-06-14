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

function getMinimumDifference(root: TreeNode | null): number {
    let res = Infinity
    let prev = null
    
    function inorder(node) {
        if (!node) {
            return
        }
        
        inorder(node.left)
        
        if (prev) {
            res = Math.min(res, node.val - prev.val)
        }
        
        prev = node
        inorder(node.right)
    }
    
    inorder(root)
    
    return res
};