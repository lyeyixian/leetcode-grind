function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const uf = new Map()
      
    for (let i = 0; i < s1.length; i++) {
      const c1 = s1[i]
      const c2 = s2[i]

      union(uf, c1, c2)
    }
    
    const res = []
    
    for (const str of baseStr) {
        res.push(find(uf, str))
    }
    
    return res.join('')
};

function union(uf, x, y) {
    const rootX = find(uf, x)
    const rootY = find(uf, y)
    
    if (rootX > rootY) {
        uf.set(rootX, rootY)   
    } else {
        uf.set(rootY, rootX)
    }
}

function find(uf, x) {
    if (!uf.has(x)) {
        uf.set(x, x)
    }
    
    if (uf.get(x) !== x) {
        uf.set(x, find(uf, uf.get(x)))
    }
    
    return uf.get(x)
}