class SummaryRanges {
    private Set<Integer> set;
    
    public SummaryRanges() {
        this.set = new TreeSet<>();    
    }
    
    public void addNum(int value) {
        this.set.add(value);
    }
    
    public int[][] getIntervals() {
        if (this.set.isEmpty()) {
            return new int[0][2];
        }
        
        List<int[]> intervals = new ArrayList<>();
        int left = -1;
        int right = -1;
        
        for (Integer value : set) {
            if (left < 0) {
                left = value;
                right = value;
            } else if (value == right + 1) {
                right = value;
            } else {
                intervals.add(new int[] { left, right });
                left = value;
                right = value;
            }
        }
        
        intervals.add(new int[] { left, right });
        
        return intervals.toArray(new int[0][]);
    }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * SummaryRanges obj = new SummaryRanges();
 * obj.addNum(value);
 * int[][] param_2 = obj.getIntervals();
 */