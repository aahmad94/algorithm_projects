public class HorizontalApproachLCP {
  public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) {
      return "";
    }
    // set prefix to the first str
    String prefix = strs[0];
    // iterate over all other strs
    for (int i = 1; i < strs.length; i++) {
      // for each str, shorten the prefix until str[i] contains the prefix at index 0, then increment the for loop
      while (strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length() - 1);
        if (prefix.isEmpty())
          return "";
      }
    }
    return prefix;
  }
}

// Time complexity:
// O(S), where S is the sum of all characters in all strings.
// In the worst case all n strings are the same. The algorithm compares the string S1 with the other strings [S2...Sn][S
// There are S character comparisons, where S is the sum of all characters in the input array.
// Space complexity : O(1). We only used constant extra space.

public class VerticalApproach {
  public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) {
      return "";
    }
    // if strs[0] is str w/ minLen then this for loop is responsible for minLen loops
    for (int i = 0; i < strs[0].length(); i++) {
      // set c to i-ith char in first str
      char c = strs[0].charAt(i);
      // iterate over all other strs
      for (int j = 1; j < strs.length; j++) {
        // if i-th char in i-ith str != i-ith char in first str, return substring up to i-ith char 
        if (i == strs[j].length() || strs[j].charAt(i) != c) {
          return strs[0].substring(0, i);
        }
      }
    }
    return strs[0];
  }
}

// Time complexity:
// O(S), where S is the sum of all characters in all strings.
// In the worst case there will be n equal strings with length m and the algorithm performs S = m*n character comparisons.
// Even though the worst case is still the same as Approach #1, in the best case there are at most n*minLen comparisons 
// where minLen is the length of the shortest string in the array.
// Space complexity : O(1). We only used constant extra space.

public class DivideAndConquer {
  public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0)
      return "";
    return longestCommonPrefix(strs, 0, strs.length - 1);
  }

  private String longestCommonPrefix(String[] strs, int l, int r) {
    if (l == r) {
      return strs[l];
    } else {
      int mid = (l + r) / 2;
      String lcpLeft = longestCommonPrefix(strs, l, mid);
      String lcpRight = longestCommonPrefix(strs, mid + 1, r);
      return commonPrefix(lcpLeft, lcpRight);
    }
  }

  String commonPrefix(String left, String right) {
    int min = Math.min(left.length(), right.length());
    for (int i = 0; i < min; i++) {
      if (left.charAt(i) != right.charAt(i))
        return left.substring(0, i);
    }
    return left.substring(0, min);
  }

}