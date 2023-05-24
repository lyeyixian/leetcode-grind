class Solution {
    public long maxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        List<Pair<Integer, Integer>> combineArr = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            combineArr.add(new Pair(nums1[i], nums2[i]));
        }
        
        Collections.sort(combineArr, (a, b) -> b.getValue() - a.getValue());
        
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        long sum = 0;
        long max = 0;
        
        for (int i = 0; i < n; i++) {
            int num = combineArr.get(i).getKey();
            int min = combineArr.get(i).getValue();
            
            pq.offer(num);
            sum += num;
            
            if (pq.size() > k) {
                sum -= pq.poll();
            }
            
            if (pq.size() == k) {
                max = Math.max(max, sum * min);    
            }
        }
        
        return max;
    }
}