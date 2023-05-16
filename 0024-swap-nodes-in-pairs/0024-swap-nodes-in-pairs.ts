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

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) {
        return null
    }
    
    if (!head.next) {
        return head
    }
    
    const dummy = new ListNode(-1, head)
    let left = head
    let right = head.next
    
    dummy.next = right
    left.next = swapPairs(right.next)
    right.next = left
    
    return dummy.next
};