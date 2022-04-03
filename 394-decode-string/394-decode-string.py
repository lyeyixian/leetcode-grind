# - iterative solution using stack
# - push into stack until closing bracket
#     - get the substring enclosed inside the bracket
#         - pop the stack and store the substring until opening bracket
#     - get the digit
#         - pop until it is not digit
#         - store the digit
#     - append substring * digit back to the stack
# - string join the stack
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        
        for character in s:
            if (character == ']'):
                res = ''
                
                while stack[-1] != '[':
                    res = stack.pop() + res
                    
                stack.pop()
                num = ''
                
                while stack and stack[-1].isdigit():
                    num = stack.pop() + num
                    
                stack.append(res * int(num))
            else:
                stack.append(character)
                
        return ''.join(stack)
        
                