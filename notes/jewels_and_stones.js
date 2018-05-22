var numJewelsInStones = function (J, S) {
  let count = 0;
  const jewels = new Set(J.split(""));
  const stones = S.split("");

  stones.forEach(stone => {
    if (jewels.has(stone)) count++;
  });
  return count;
};