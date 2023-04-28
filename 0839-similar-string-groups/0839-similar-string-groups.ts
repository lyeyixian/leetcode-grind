function numSimilarGroups(strs: string[]): number {
    const uf = []
    
    for (let i = 0; i < strs.length; i++) {
        uf[i] = i
    }
    
    for (let i = 0; i < strs.length - 1; i++) {
        const str1 = strs[i]
        
        for (let j = i + 1; j < strs.length; j++) {
            const str2 = strs[j]
            
            if (isSimilar(str1, str2)) {
                union(uf, i, j)
            }
        }
    }
    
    const set = new Set()
    
    for (const idx of uf) {
        set.add(find(uf, idx))
    }
    
    return set.size
};

function union(uf, a, b) {
    const rootA = find(uf, a)
    const rootB = find(uf, b)
    
    if (rootA !== rootB) {
        uf[rootA] = rootB    
    }
}

function find(uf, a) {
    if (uf[a] !== a) {
        uf[a] = find(uf, uf[a])
    }
    
    return uf[a]
}

function isSimilar(x, y) {
    if (x === y) {
        return true
    }
    
    let count = 0
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            count++
        }
    }
    
    return count === 2
}