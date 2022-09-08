/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return null
    }
    
    if (!head.next) {
        return head
    }
    
    const reversed = reverseList(head.next)
    const newNode = new ListNode(head.val)
    let current = reversed
    
    while (current.next) {
        current = current.next
    }
    
    current.next = newNode
    
    return reversed
};