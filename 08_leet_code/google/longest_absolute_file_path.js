const lengthLongestPath = (input) => {
  if (input === null || input.length === 0) return 0;
  const tracker = [];
  let ans = 0;
  const directories = input.split("\n");

  for (let i = 0; i < directories.length; i++) {
    const path = directories[i];
    const level = path.lastIndexOf("\t");
    tracker[level] = path.length - level + (level > -1 ? tracker[level - 1] : -1);
    if (path.indexOf(".") >= 0) {
      ans = Math.max(ans, tracker[level]);
    }
  }
  return ans;
};