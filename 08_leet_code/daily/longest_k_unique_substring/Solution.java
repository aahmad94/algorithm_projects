import java.util.HashMap;

class Solution {
  public static void main(String[] args) {
    longestUniqueSubstr("abacccaabbcc", 3); 
  } 

  private static String longestUniqueSubstr(String str, int k) {
    HashMap<Character, Integer> chrMap = new HashMap<Character, Integer>();
    String longest = new String("");
    Boolean shouldUpdate = true;

    for (int i = 0, j = 0; j < str.length();) {
      Character chrJ = str.charAt(j);
      Integer chrCtJ = chrMap.get(chrJ);

      if (shouldUpdate) {
        if (chrCtJ != null) {
          chrMap.put(chrJ, chrCtJ + 1);
        } else {
          chrMap.put(chrJ, 1);
        }
      }
      
      chrCtJ = chrMap.get(chrJ);
      
      if (chrCtJ <= k) {
        if (j - i + 1 >= longest.length()) {
          longest = str.substring(i, j + 1);
        }
        shouldUpdate = true;
        j++;
      } else {
        Character chrI = str.charAt(i);
        Integer chrCtI = chrMap.get(chrI);
        chrMap.put(chrI, chrCtI - 1);
        shouldUpdate = false;
        i++;
      }
    }
    System.out.println(longest);
    return longest;
  }
}