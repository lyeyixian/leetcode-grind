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

function sumNumbers(root: TreeNode | null): number {
    let res = 0
    
    // only can add when both left and right are null
    function helper(node, str) {
        if (!node) {
            return    
        }
        
        const currStr = str + node.val.toString()
        
        if (!node.left && !node.right) {
            res += parseInt(currStr) || 0
            
            return
        }
        
        helper(node.left, currStr)
        helper(node.right, currStr)
    }
    
    helper(root, '')
    
    return res
};