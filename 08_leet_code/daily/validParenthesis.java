class Solution {
    public boolean isValid(String s) {
        Map <String, String> openToClose = new HashMap<String, String>();
        Map <String, String> closeToOpen = new HashMap<String, String>();
        Stack<String> stack = new Stack<String>();

        openToClose.put("(", ")");
        openToClose.put("[", "]");
        openToClose.put("{", "}");
        closeToOpen.put(")", "(");
        closeToOpen.put("]", "[");
        closeToOpen.put("}", "{");
        
        for (int i = 0; i < s.length(); i++) {
            char chr = s.charAt(i);
            String str = Character.toString(chr);
        
            if (openToClose.get(str) instanceof String) {
                stack.push(str);
            } else {
                String top = "";
                if (stack.size() > 0) {
                    top = stack.peek();
                }
                String shouldBeTop = closeToOpen.get(str);
                if (!top.equals(shouldBeTop)) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        
        if (stack.size() > 0) {
            return false;
        } else {
            return true;
        }
    }
}