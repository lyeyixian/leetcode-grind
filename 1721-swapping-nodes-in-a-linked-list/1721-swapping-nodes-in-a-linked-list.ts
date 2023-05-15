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

// swapping nodes
function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let dummy = new ListNode(-1, head)
    let prevLeft = dummy
    let prevRight = dummy
    let left = head
    let right = head
    
    for (let i = 1; i < k; i++) {
        prevLeft = left
        left = left.next
    }
    
    let fast = left.next
    
    while (fast !== null) {
        fast = fast.next
        prevRight = right
        right = right.next
    }
    
    if (left === right) {
        return head
    }
    
    prevLeft.next = right
    prevRight.next = left
    
    const temp = left.next
    left.next = right.next
    right.next = temp
    
    return dummy.next
};

// swapping values
// function swapNodes(head: ListNode | null, k: number): ListNode | null {
//     let firstNode = head
    
//     for (let i = 1; i < k; i++) {
//         firstNode = firstNode.next
//     }
    
//     let secondNode = head
//     let fast = head
    
//     for (let i = 0; i < k; i++) {
//         fast = fast.next
//     }
    
//     while (fast !== null) {
//         secondNode = secondNode.next
//         fast = fast.next
//     }
    
//     const temp = firstNode.val
//     firstNode.val = secondNode.val
//     secondNode.val = temp
    
//     return head
// };