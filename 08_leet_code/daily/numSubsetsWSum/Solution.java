import java.util.ArrayList;
import java.util.Hashtable;
import java.lang.StringBuilder;

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
    Hashtable<String, Integer> memo = new Hashtable<String, Integer>();
    return rec(nums, k, nums.size(), memo);
  }

  public static Integer rec(ArrayList<Integer> nums, int total, int idx, Hashtable<String, Integer> memo) {
    System.out.println(total);
    if (total == 0) return 1;
    if (total < 0) return 0;
    if (idx <= 0) return 0;
    String key = total + ":" + idx;
    if (memo.get(key) != null) return memo.get(key);

    Integer ans;
    if (nums.get(idx - 1) > total) {
      ans = rec(nums, total, idx - 1, memo);
      memo.put(key, ans);
      return ans;
    } else {
      ans = Math.max(
        rec(nums, total, idx - 1, memo),
        rec(nums, total - nums.get(idx - 1), idx - 1, memo) + 1
      );
      memo.put(key, ans);
      return ans;
    }
  }
}