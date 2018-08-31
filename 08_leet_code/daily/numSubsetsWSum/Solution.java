import java.util.ArrayList;

class Solution {
  public static void main(String[] args) {
    ArrayList<Integer> nums = new ArrayList<Integer>();
    nums.add(1);
    nums.add(2);
    nums.add(3);
    nums.add(4);

    System.out.println(
      numWays(nums, 6)
    );
  }

  public static Integer numWays(ArrayList<Integer> nums, int k) {
    return rec(nums, k, nums.size());
  }

  public static Integer rec(ArrayList<Integer> nums, int total, int idx) {
    System.out.println(total);
    if (total == 0) return 1;
    if (total < 0) return 0;
    if (idx <= 0) return 0;

    if (nums.get(idx - 1) > total) {
      return rec(nums, total, idx - 1);
    } else {
      return Math.max(
        rec(nums, total, idx - 1),
        rec(nums, total - nums.get(idx - 1), idx - 1) + 1
      );
    }
  }
}