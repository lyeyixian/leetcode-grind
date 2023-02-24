class Solution {
    public int minimumDeviation(int[] nums) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int max = 0;
        
        for (int num : nums) {
            int minNum = num;
            
            while (minNum % 2 == 0) {
                minNum /= 2;    
            }
            
            int maxNum = Math.max(num, minNum * 2);
            
            max = Math.max(max, minNum);
            int[] arr = new int[2];
            arr[0] = minNum;
            arr[1] = maxNum;
            pq.offer(arr);
        }
        
        int res = Integer.MAX_VALUE;
        
        while (pq.size() == nums.length) {
            int[] interval = pq.poll();
            res = Math.min(res, max - interval[0]);
            
            if (interval[0] < interval[1]) {
                interval[0] *= 2;
                pq.offer(interval);
                max = Math.max(max, interval[0]);
            }
        }
        
        return res;
    }
}