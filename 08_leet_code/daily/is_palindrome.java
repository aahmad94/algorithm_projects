class Solution {
    public boolean isPalindrome(int x) {
        String xStr = Integer.toString(x);
        for (int i = 0; i < xStr.length(); i++) {
            int j = xStr.length() - 1 - i;
            if (xStr.charAt(i) != xStr.charAt(j)) {
                return false;
            }
        }  
        return true;
    }
}