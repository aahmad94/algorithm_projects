import java.util.HashMap;

class Solution {
  public static void main(String[] args) {
    System.out.println(longest("aeeioueju")); // 7
  }

  private static int longest(String str) {
    String template = "aeiou";
    HashMap<String, Integer> dp = new HashMap<String, Integer>();
    return rec(template, str, template.length(), str.length(), dp);
  }

  private static int rec(String template, String str, int m, int n, HashMap<String, Integer> dp) {
    if (m == 0 || n == 0) return 0;
    String key = new String(Integer.toString(m) + ":" + Integer.toString(n));
    if (dp.get(key) != null) return dp.get(key);
    int result = 0;
    if (str.charAt(n - 1) == template.charAt(m - 1)) {
      result = Math.max(
        rec(template, str, m, n - 1, dp),
        rec(template, str, m - 1, n - 1, dp)
      ) + 1;
    } else {
      result = Math.max(
        rec(template, str, m - 1, n - 1, dp),
        rec(template, str, m, n - 1, dp)
      );
    }
    dp.put(key, result);
    return result;
  }
}