// --- coin change ---
// const coinChange = (amount, denominations) => {
//   const path = new Array(amount + 1);
//   path.fill(amount + 1);
//   path[0] = 0;
//   for (let i = 1; i <= amount; i++) {
//     for (let j = 0; j < denominations.length; j++) {
//       const coin = denominations[j];
//       if (coin <= i) {
//         console.log({coin});
//         path[i] = Math.min(path[i], path[i - coin] + 1);
//       }
//     }
//   }
//   return path;
// };

// const denominations = [1, 2, 5];
// const amount = 11;

// // [0, 11, 11, 11, ...]
// // [0, 1, 11, 11, ...]
// // [0, 1, 2, 11, ...] -> [0, 1, 1, 11, ...]

// console.log(coinChange(amount, denominations));

// --- staircase ---

// const numWays = (stairs, steps = [1, 2]) => {
//   const path = [1, 1];
//   for (let i = 2; i <= stairs; i++) {
//     for (let j = 0; j < steps.length; j++) {
//       if (steps[j] <= i) {
//         path[i] = (path[i] || 0) + path[i - steps[j]];
//       }
//     }
//   }
//   return path;
// };

// console.log(numWays(5));

// const permutations = (arr) => {
//   if (arr.length === 1) return [arr];
//   const first = arr[0];
//   const perms = permutations(arr.slice(1));
//   let totalPerms = [];
//   for (let i = 0; i < perms.length; i++) {
//     const perm = perms[i];
//     for (let j = 0; j <= perms.length; j++) {
//       const newPerm = perm.slice(0, j).concat([first], perm.slice(j));
//       totalPerms.push(newPerm);
//     }
//   }
//   return totalPerms;
// };

// console.log(permutations([1, 2, 3]));

const subsets = (arr) => {
  const ans = [[]];
  genSubs(arr, arr.length - 1, ans);
  return ans;
};

const genSubs = (arr, idx, ans) => {
  if (idx < 0) return;
  ans.push(arr.slice(idx));
  genSubs(arr.slice(0, idx).concat(arr.slice(idx + 1)), idx - 1, ans);
  genSubs(arr, idx - 1, ans);
};

console.log(subsets([1, 2]));