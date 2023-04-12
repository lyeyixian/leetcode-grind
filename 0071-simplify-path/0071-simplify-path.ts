function simplifyPath(path: string): string {
    const stack = []
    
    path.split('/').filter(dir => dir !== '').forEach(dir => {
        if (dir === '..') {
            if (stack.length) {
                stack.pop()
            }
        } else if (dir === '.') {
            
        } else {
            stack.push(dir)
        }
    })
    
    return '/' + stack.join('/')
};