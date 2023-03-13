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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true
    }
    
    return helper(root.left, root.right)
};

function helper(leftTree, rightTree) {
    if (!leftTree && !rightTree) {
        return true
    }

    if (leftTree?.val !== rightTree?.val) {
        return false
    }
    
    return helper(leftTree.left, rightTree.right) && helper(leftTree.right, rightTree.left)
}