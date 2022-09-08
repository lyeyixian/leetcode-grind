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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = []
    
    traverse(root, res)
    
    return res
};

function traverse(node, res) {
    if (!node) {
        return
    }
    
    if (node.left) {
        traverse(node.left, res)
    }
    
    if (node.right) {
        traverse(node.right, res)
    }
    
    res.push(node.val)
}