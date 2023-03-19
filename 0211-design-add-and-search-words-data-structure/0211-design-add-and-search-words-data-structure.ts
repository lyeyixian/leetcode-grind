class WordDictionary {
    trie: Trie
    
    constructor() {
        this.trie = new Trie()
    }

    addWord(word: string): void {
        this.trie.insert(word)
    }

    search(word: string): boolean {
        return this.trie.search(word)
    }
}

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
        
        function helper(index, str, node) {
            if (index >= str.length) {
                return node.isEnd
            }
            
            const char = str[index]
            
            if (char === '.') {
                for (const child of node.children.values()) {
                    if (helper(index + 1, str, child)) {
                        return true
                    }
                }
                
                return false
            } else {
                if (!node.children.has(char)) {
                    return false
                }
                
                return helper(index + 1, str, node.children.get(char))
            }
        }
        
        return helper(0, word, this.root)
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
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */