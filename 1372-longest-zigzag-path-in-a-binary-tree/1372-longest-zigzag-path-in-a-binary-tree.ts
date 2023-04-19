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

function longestZigZag(root: TreeNode | null): number {
    let max = 0
    
    function dfs(node, fromRight, length) {
        if (!node) {
            return
        }
        
        max = Math.max(max, length)
        
        if (fromRight) {
            dfs(node.left, false, length + 1)
            dfs(node.right, true, 1)
        } else {
            dfs(node.left, false, 1)
            dfs(node.right, true, length + 1)
        }
    }
    
    dfs(root, true, 0)
    dfs(root, false, 0)
    
    return max
};