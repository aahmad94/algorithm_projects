//                  (10,2,1)                   ->1^2
//                 /        \
//                /          \
//          (10,2,2)        (9,2,2)            ->2^2
//          /     \         /     \
//         /       \       /       \
//     (10,2,3) (6,2,3)  (9,2,3) (5,2,3)       ->3^2
//     /     \      |       |       |    
//    /       \     0       1       0
// (10,2,4) (1,2,4)                            ->4^2
//     |       |
//     0       0
// This is a binary tree.The answer is the count of the leaves which equals 1. 
// While going from the root to a leaf which is 1, sum of powers at passing every right edge and the leaf gives the X.
// (10,2,1)--(9,2,2) -> right edge       -> 1^2
// (9, 2, 2)-- - (9, 2, 3) -> left edge -> 0
// (9, 2, 3) -> leaf which is 1 -> 3 ^ 2
// So, 10 = 1 ^ 2 + 3 ^ 2.

// Find the number of ways that a given integer, X, can be expressed as the sum of the Nth powers of unique, natural numbers.

function powerSum(X, N) {
  // Complete this function
  return totnum(X, N, 1);
}

function totnum(X, N, num) {
  if (Math.pow(num, N) < X) {
    return totnum(X, N, num + 1) + totnum(X - Math.pow(num, N), N, num + 1)
  } else if (Math.pow(num, N) === X) {
    return 1;
  } else {
    return 0;
  }
}
