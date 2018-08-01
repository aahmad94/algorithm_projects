import java.util.HashMap;

class Solution {
  public static void main(String args[]) {
    String[][] grid = new String[3][4];
    String[] row1 = new String[] {"G", "G", "B", "R"}; 
    String[] row2 = new String[] {"G", "B", "R", "B"}; 
    String[] row3 = new String[] {"R", "B", "B", "B"}; 
    grid[0] = row1;
    grid[1] = row2;
    grid[2] = row3;
    scan(grid);
  }

  public static HashMap<String, Integer> scan(String[][] grid) {
    HashMap<String, Integer> props = new HashMap<String, Integer>();
    int maxColorCt = 0;
    String maxColor = "";

    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        String color = grid[i][j];
        if (color.length() > 0) {
          rec(grid, i, j, color, props);
          if (props.get(color) >= maxColorCt) {
            maxColor = color;
            maxColorCt = props.get(color);
          }
          props.clear();
        }
      }
    }   

    HashMap<String, Integer> result = new HashMap<String, Integer>();
    result.put(maxColor, maxColorCt);

    System.out.println(result);
    return result;
  }

  private static void rec(String[][] grid, int r, int c, String color, HashMap<String, Integer> props) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != color) return;
    Integer currCt = props.get(grid[r][c]);
    if (currCt != null) {
      props.put(grid[r][c], currCt + 1);
    } else {
      props.put(grid[r][c], 1);
    }
    grid[r][c] = "";
    rec(grid, r + 1, c, color, props);
    rec(grid, r - 1, c, color, props);
    rec(grid, r, c + 1, color, props);
    rec(grid, r, c - 1, color, props);
  }
}