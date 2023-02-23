class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        PriorityQueue<int[]> minPq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        
        for (int i = 0; i < profits.length; i++) {
            minPq.offer(new int[]{ profits[i], capital[i] });
        }
        
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        
        fillPq(pq, w, profits, capital, minPq);
        
        int resCapital = w;
        
        for (int i = 0; i < k && !pq.isEmpty(); i++) {
            int currentProfit = pq.poll();
            
            resCapital += currentProfit;
            fillPq(pq, resCapital, profits, capital, minPq);
        }
        
        return resCapital;
    }
    
    private void fillPq(PriorityQueue<Integer> pq, int currentCapital, int[] profits, int[] capital, PriorityQueue<int[]> minPq) {
        while (!minPq.isEmpty() && minPq.peek()[1] <= currentCapital) {
            pq.offer(minPq.poll()[0]);
        }
    }
}