/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfs(root).isBalanced
};

function dfs(node) {
    if (!node) {
        return {
            isBalanced: true,
            height: -1
        }
    }
    
    const left = dfs(node.left)
    const right = dfs(node.right)
    
    return {
        isBalanced: left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) <= 1,
        height: Math.max(left.height, right.height) + 1
    }
}