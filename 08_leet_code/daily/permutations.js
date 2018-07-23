// Write a recursive method that returns all of the permutations of an array

// Similar to the subsets problem, we observe that to get the permutations
// of [1, 2, 3] we can look at the permutations of [1, 2] which are
// [1, 2] and [2, 1] and add the last element to every possible index getting
// [3, 1, 2], [1, 3, 2], [1, 2, 3], [3, 2, 1], [2, 3, 1]

const permutations = (arr) => {
  if (arr.length === 1) return [arr];
  const first = arr.shift();
  const perms = permutations(arr);
  let totalPerms = [];
  perms.forEach( perm => {
    for (let i = 0; i <= perm.length; i++) {
      const newPerm = perm.slice(0, i).concat([first], perm.slice(i, perm.length));
      totalPerms.push(newPerm);
    }
  });
  return totalPerms;
};

console.log(permutations([1, 2, 3]));
