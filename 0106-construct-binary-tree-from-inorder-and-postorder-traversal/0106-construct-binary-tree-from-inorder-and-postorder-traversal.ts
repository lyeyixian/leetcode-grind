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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    function findRootIndex(postIndex, inIndexStart, inIndexEnd) {
        for (let i = inIndexStart; i <= inIndexEnd; i++) {
            if (inorder[i] === postorder[postIndex]) {
                return i
            }
        }
    }
    
    function build(postIndex, inIndexStart, inIndexEnd) {
        if (postIndex < 0 || inIndexStart > inIndexEnd) {
            return null
        }
        
        const inRootIndex = findRootIndex(postIndex, inIndexStart, inIndexEnd)
        const node = new TreeNode(postorder[postIndex])
        const numOfNodesOnRightSubtree = inIndexEnd - inRootIndex
        
        node.right = build(postIndex - 1, inRootIndex + 1, inIndexEnd)
        node.left = build(postIndex - (numOfNodesOnRightSubtree + 1), inIndexStart, inRootIndex - 1)
        
        return node
    }
    
    return build(postorder.length - 1, 0, inorder.length - 1)
};