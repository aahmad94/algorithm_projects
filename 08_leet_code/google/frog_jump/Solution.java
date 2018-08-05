public class Solution {
  public static void main(String[] args) {
    int[] river = {0,1,3,5,6,8,12,17}; // true
    // int[] river = {0,1,2,3,4,8,9,11};
    System.out.println(frogJump(river));
  }

  public static Boolean frogJump(int[] river) {
    return frogJumpHelper(river, 0, 0);
  }

  private static Boolean frogJumpHelper(int[] river, int idx, int jumpDistance) {
    System.out.println(river[idx]);
    System.out.println(jumpDistance);
    System.out.println("----------");
    if (idx == river.length - 1) {
      if (jumpDistance == river[idx]) {
        return true;
      } else {
        return false;
      }
    }
    Boolean toReturn = (
      frogJumpHelper(river, idx + 1, river[idx] + jumpDistance + 1) ||
      frogJumpHelper(river, idx + 1, river[idx] + jumpDistance - 1)  
    );
    
    return toReturn;
   }
}