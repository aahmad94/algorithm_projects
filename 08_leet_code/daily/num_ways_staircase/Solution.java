public class Solution {
  public static void main(String[] args) {
    numWays(5, new int[] {1, 2});
  }

  public static int numWays(int numSteps, int[] stepSizes) {
    int[] dp = new int[numSteps + 1];
    dp[0] = 1;

    for (int i = 0; i <= numSteps; i++) {
      for (int j = 0; j < stepSizes.length; j++) {
        if (stepSizes[j] <= i) {
          dp[i] += dp[i - stepSizes[j]];
        }
      }
    }
    System.out.println(dp[numSteps]);
    return dp[numSteps];
  }
}

