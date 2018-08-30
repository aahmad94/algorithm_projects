import java.util.ArrayList;
import java.util.Arrays;

class Solution {
  public static void main(String[] args) {
    boolean[][] maze = new boolean[4][4];
    maze[0] = (new boolean[] {false, false, false, false});
    maze[1] = (new boolean[] {true, true, false, true});
    maze[2] = (new boolean[] {false, false, false, false});
    maze[3] = (new boolean[] {false, false, false, false});
    // System.out.println(Arrays.deepToString(maze));
    System.out.println(minSteps(maze, new int[] {3, 0}, new int[] {0, 0}));
  }

  public static int minSteps(boolean[][] maze, int[] begin, int[] end) {
    int ans = rec(maze, begin[0], begin[1], end);
    if (ans < Integer.MAX_VALUE) {
      return ans;
    } else {
      return -1;
    }
  }

  public static int rec(boolean[][] maze, int x, int y, int[] end) {
    System.out.println(Arrays.toString(new int[] {x, y}));
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length || maze[x][y] == true) {
      return -1;
    }
    
    if (x == end[0] && y == end[1]) {
      return 1;
    }
    
    int steps = 1;
    
    maze[x][y] = true;
    
    int up = rec(maze, x - 1, y, end);
    int right = rec(maze, x, y + 1, end);
    int left = rec(maze, x, y - 1, end);
    int down = rec(maze, x + 1, y, end);
    
    int[] nextSteps = new int[] {left, right, up, down};
    int minStep = Integer.MAX_VALUE;
    for (int i = 0; i < nextSteps.length; i++) {
      if (nextSteps[i] > 0 && nextSteps[i] < minStep) {
        minStep = nextSteps[i];
      }
    };
    
    if (minStep == Integer.MAX_VALUE) return -1;
    steps += minStep;
    return steps;
  }
}