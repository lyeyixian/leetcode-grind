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
    
    if (!left.isBalanced) {
        return {
            isBalanced: false
        }
    }
    
    const right = dfs(node.right)
    
    if (!right.isBalanced) {
        return {
            isBalanced: false
        }
    }
    
    if (Math.abs(left.height - right.height) > 1) {
        return {
            isBalanced: false
        }
    }
    
    return {
        isBalanced: true,
        height: Math.max(left.height, right.height) + 1
    }
}