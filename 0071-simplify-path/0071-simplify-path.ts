function simplifyPath(path: string): string {
    const stack = []
    
    path
        .split('/')
        .filter(dir => dir !== '')
        .forEach(dir => {
            if (dir !== '..' && dir !== '.') {
                stack.push(dir)
            } else if (dir === '..' && stack.length) {
                stack.pop()
            }
        })
    
    return '/' + stack.join('/')
};