/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null
    }
    
    return helper(head, null)
};

function helper(head: ListNode | null, tail: ListNode | null) {
    if (head === tail) {
        return null
    }
    
    let slow = head
    let fast = head
    
    while (fast !== tail && fast.next !== tail) {
        slow = slow.next
        fast = fast.next.next
    }
    
    const root = new TreeNode(slow.val)
    
    root.left = helper(head, slow)
    root.right = helper(slow.next, tail)
    
    return root
}