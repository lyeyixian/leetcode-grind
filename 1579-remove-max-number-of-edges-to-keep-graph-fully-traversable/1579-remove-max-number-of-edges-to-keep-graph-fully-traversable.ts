function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    const aliceUF = new UnionFind(n)
    const bobUF = new UnionFind(n)
    let count = 0
    
    for (const [type, u, v] of edges) {
        if (type === 3) {
            // union both graph but only count as 1 added edge
            count += (aliceUF.union(u, v) | bobUF.union(u, v))
        }
    }
    
    for (const [type, u, v] of edges) {
        if (type === 1) {
            count += aliceUF.union(u, v)
        } else if (type === 2) {
            count += bobUF.union(u, v)
        }
    }
    
    return aliceUF.isConnected() && bobUF.isConnected()
        ? edges.length - count
        : -1
};

class UnionFind {
    numOfComponents: number
    uf: number[]
    size: number[]

    constructor(n) {
        this.numOfComponents = n
        this.uf = []
        this.size = []
        
        for (let i = 0; i < n; i++) {
            this.uf[i] = i
            this.size[i] = 1
        }
    }
    
    find(u) {
        if (this.uf[u] !== u) {
            this.uf[u] = this.find(this.uf[u])
        }
        
        return this.uf[u]
    }
    
    union(u, v) {
        const rootU = this.find(u)
        const rootV = this.find(v)
        
        if (rootU === rootV) {
            return 0
        }
        
        if (this.size[rootU] > this.size[rootV]) {
            this.size[rootU] += this.size[rootV]
            this.uf[rootV] = rootU
        } else {
            this.size[rootV] += this.size[rootU]
            this.uf[rootU] = rootV
        }

        this.numOfComponents--
        
        return 1
    }

    isConnected() {
        return this.numOfComponents === 1
    }
}