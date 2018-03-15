class fibonacci {
  static int fib(int n) {
    if (n <= 1)
      return n;
    return fib(n - 1) + fib(n - 2);
  }

  public static void main(String args[]) {
    int n = 9;
    System.out.println(fib(n));
  }
}

// Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential
// Extra Space: O(n) if we consider the function call stack size


// Fibonacci Series using Dynamic Programming
class fibonacci {
  static int fib(int n) {
    /* Declare an array to store Fibonacci numbers. */
    int[] f = new int[n + 1];
    int i;

    /* 0th and 1st number of the series are 0 and 1*/
    f[0] = 0;
    f[1] = 1;

    for (i = 2; i <= n; i++) {
      /* Add the previous 2 numbers in the series
        and store it */
      f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
  }

  public static void main(String args[]) {
    int n = 9;
    System.out.println(fib(n));
  }
}

// Time Complexity: O(n) 
// Extra Space: O(n) if we consider the function call stack size

// Java program for Fibonacci Series using Space
// Optimized Method
class fibonacci {
  static int fib(int n) {
    int a = 0, b = 1, c;
    if (n == 0)
      return a;
    for (int i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  public static void main(String args[]) {
    int n = 9;
    System.out.println(fib(n));
  }
}

// Time complexity: O(n)
// Space complexity: O(1)