class BrowserHistory {
    list: Node
    
    constructor(homepage: string) {
        this.list = new Node(homepage)
    }

    visit(url: string): void {
        const node = new Node(url)
        
        node.prev = this.list
        this.list.next = node
        this.list = node
    }

    back(steps: number): string {
        for (let i = 0; i < steps; i++) {
            if (!this.list.prev) {
                return this.list.url
            }
            
            this.list = this.list.prev
        }
        
        return this.list.url
    }

    forward(steps: number): string {
        for (let i = 0; i < steps; i++) {
            if (!this.list.next) {
                return this.list.url
            }
            
            this.list = this.list.next
        }
        
        return this.list.url
    }
}

class Node {
    url: string
    prev: Node
    next: Node
    
    constructor(url) {
        this.url = url || ''
        this.prev = null
        this.next = null
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */