class KthLargest {
    int k;
    PriorityQueue<Integer> minPq;
    
    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minPq = new PriorityQueue<>();
        
        for (int i = 0; i < nums.length; i++) {
            this.minPq.add(nums[i]);
        }
        
        while (this.minPq.size() > k) {
            this.minPq.poll();
        }
    }
    
    public int add(int val) {
        this.minPq.add(val);
        
        while (this.minPq.size() > k) {
            this.minPq.poll();
        }
        
        return this.minPq.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */