class Trie {
    root: TrieNode
    
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let current = this.root
        
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode())
            }
            
            current = current.children.get(char)
        }

        current.isEnd = true
    }

    search(word: string): boolean {
        let current = this.root
        
        for (const char of word) {
            if (!current.children.has(char)) {
                return false
            }
            
            current = current.children.get(char)
        }
        
        return current.isEnd
    }

    startsWith(prefix: string): boolean {
        let current = this.root
        
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false
            }
            
            current = current.children.get(char)
        }
        
        return true
    }
}

class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean

    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */