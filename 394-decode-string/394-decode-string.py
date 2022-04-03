class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        
        for character in s:
            if (character == ']'):
                popOfStack = stack.pop()
                res = ''
                
                while popOfStack != '[':
                    res = popOfStack + res
                    popOfStack = stack.pop()
                    
                topOfStack = stack[-1]
                num = ''
                
                while topOfStack.isdigit():
                    num = stack.pop() + num
                    topOfStack = stack[-1] if len(stack) > 0 else ''
                    
                res *= int(num)
                
                for c in res:
                    stack.append(c)
            else:
                stack.append(character)
                
        return ''.join(stack)
        
                