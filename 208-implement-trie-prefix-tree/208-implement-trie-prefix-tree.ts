class Trie {
    root: TrieNode
    
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let current = this.root
        
        for (const char of word) {
            if (!(char in current.children)) {
                current.children[char] = new TrieNode()
            }
            
            current = current.children[char]
        }

        current.isEnd = true
    }

    search(word: string): boolean {
        let current = this.root
        
        for (const char of word) {
            if (!(char in current.children)) {
                return false
            }
            
            current = current.children[char]
        }
        
        return current.isEnd
    }

    startsWith(prefix: string): boolean {
        let current = this.root
        
        for (const char of prefix) {
            if (!(char in current.children)) {
                return false
            }
            
            current = current.children[char]
        }
        
        return true
    }
}

class TrieNode {
    children: { [index: string]: TrieNode }
    isEnd: boolean

    constructor() {
        this.children = {}
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