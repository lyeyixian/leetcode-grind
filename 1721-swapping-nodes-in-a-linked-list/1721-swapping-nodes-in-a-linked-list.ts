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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let firstNode = head
    
    for (let i = 1; i < k; i++) {
        firstNode = firstNode.next
    }
    
    let secondNode = head
    let fast = head
    
    for (let i = 0; i < k; i++) {
        fast = fast.next
    }
    
    while (fast !== null) {
        secondNode = secondNode.next
        fast = fast.next
    }
    
    const temp = firstNode.val
    firstNode.val = secondNode.val
    secondNode.val = temp
    
    return head
};