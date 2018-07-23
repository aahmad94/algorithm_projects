// For contigous sequences that have product < 10

// const subSeqLessThanK = (arr, k) => {
//   let count = 0;
//   let product = 1;
//   for (let i = 0, j = 0; i < arr.length;) {
//     if (product * arr[j] < k) {
//       product *= arr[j];
//       count += j - 1 + 1;
//       j++;
//     } else {
//       product /= arr[i];
//       i++;
//     }
//   }
//   return count;
// };

// console.log(subSeqLessThanK([1, 2, 3, 4], 10)); // 6

// For all possible combinations that have product < 10
