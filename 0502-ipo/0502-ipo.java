class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        // min pq to get the min capital in log n time
        PriorityQueue<int[]> minCapital = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        for (int i = 0; i < profits.length; i++) {
            minCapital.offer(new int[]{ profits[i], capital[i] });
        }
        
        // max pq to greedily pick the max profit that the current capital allow us to
        PriorityQueue<Integer> maxProfit = new PriorityQueue<>(Collections.reverseOrder());
        
        int resCapital = w;
        
        for (int i = 0; i < k; i++) {
            // starting from the lowest, put all possible profit that holds for current capital into max profit pq
            while (!minCapital.isEmpty() && minCapital.peek()[1] <= resCapital) {
                maxProfit.offer(minCapital.poll()[0]);
            }
            
            // do this loop for k times or until max profit pq is empty
            if (maxProfit.isEmpty()) {
                break;
            }
            
            // get the max profit currently from max pq
            resCapital += maxProfit.poll();
        }
        
        return resCapital;
    }
}