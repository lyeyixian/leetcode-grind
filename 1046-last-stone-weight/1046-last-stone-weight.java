class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        
        for (int stone : stones) {
            pq.add(stone);
        }
        
        while (pq.size() > 1) {
            int stone1 = pq.poll();
            int stone2 = pq.poll();
            int resultStone = stone1 - stone2;
            
            if (resultStone > 0) {
                pq.add(resultStone);
            }
        }
        
        return pq.size() == 1 ? pq.poll() : 0;
    }
}