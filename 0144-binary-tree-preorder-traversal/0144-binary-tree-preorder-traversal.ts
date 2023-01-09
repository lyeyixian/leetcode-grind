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

function preorderTraversal(root: TreeNode | null): number[] {
    const arr = []
    
    helper(root, arr)
    
    return arr
};

function helper(node, arr) {
    if (!node) {
        return
    }
    
    arr.push(node.val)
    helper(node.left, arr)
    helper(node.right, arr)
}