
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    this.front = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (!this.stack1.length) {
        this.front = x
    }
    
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }
    
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length) {
        return this.stack2[this.stack2.length - 1]
    }
    
    return this.front
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */