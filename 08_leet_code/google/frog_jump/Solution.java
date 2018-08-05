public class Solution {
  public static void main(String[] args) {
    int[] stones = {0,1,3,5,6,8,12,17}; // true
    // int[] stones = {0,1,2,3,4,8,9,11}; // true
    System.out.println(frogJump(stones));
  }

  public static Boolean frogJump(int[] stones) {
    return frogJumpHelper(stones, 0, 0);
  }

  private static Boolean frogJumpHelper(int[] stones, int idx, int jumpSize) {
    for (int i = idx + 1; i < stones.length; i++) {
      int gap = stones[i] - stones[idx];
      if (gap >= jumpSize - 1 && gap <= jumpSize + 1) {
        if (frogJumpHelper(stones, i, gap)) {
          return true;
        }
      }
    }
    return idx == stones.length - 1;  
  }
}

// time complelxity O(3^n)
// space complexity: O(n)