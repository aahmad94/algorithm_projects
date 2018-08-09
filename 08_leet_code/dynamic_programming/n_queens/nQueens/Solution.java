import java.util.ArrayList;

class Solution {
  public static void main(String[] args) {
    System.out.println(nQueens(4));
  }

  public static int nQueens(int n) {
    ArrayList<Integer> board = new ArrayList<Integer>();
    return rec(n, board);
  }

  private static int rec(int n, ArrayList<Integer> board) {
    if (board.size() == n) return 1;
    int count = 0;
    for (int c = 0; c < n; c++) {
      board.add(c);
      if (isValid(board)) {
        count += rec(n, board);
      }
      board.remove(board.size() - 1);
    }
    return count;
  }

  private static boolean isValid(ArrayList<Integer> board) {
    int currQueenRow = board.size() - 1;
    int currQueenCol = board.get(currQueenRow);
    for (int r = 0; r < currQueenRow; r++) {
      int c = board.get(r);
      int diff = Math.abs(currQueenCol - c);
      if (diff == 0 || diff == Math.abs(currQueenRow - r)) {
        return false;
      }
    }
    return true;
  } 
}

// time complexity O(n^3)
// space complexity O(n)