class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        PriorityQueue<int[]> minCapital = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        
        for (int i = 0; i < profits.length; i++) {
            minCapital.offer(new int[]{ profits[i], capital[i] });
        }
        
        PriorityQueue<Integer> maxProfit = new PriorityQueue<>(Collections.reverseOrder());
        
        int resCapital = w;
        
        for (int i = 0; i < k; i++) {
            fillPq(maxProfit, resCapital, profits, capital, minCapital);
            
            if (maxProfit.isEmpty()) {
                break;
            }
            
            int currentProfit = maxProfit.poll();
            
            resCapital += currentProfit;
        }
        
        return resCapital;
    }
    
    private void fillPq(PriorityQueue<Integer> maxProfit, int currentCapital, int[] profits, int[] capital, PriorityQueue<int[]> minCapital) {
        while (!minCapital.isEmpty() && minCapital.peek()[1] <= currentCapital) {
            maxProfit.offer(minCapital.poll()[0]);
        }
    }
}