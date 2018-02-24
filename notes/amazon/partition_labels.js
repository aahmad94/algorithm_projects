// A string S of lowercase letters is given.We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

//   Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9, 7, 8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

//   Note:
// S will have length in range[1, 500].
// S will consist of lowercase letters('a' to 'z') only.

var partitionLabels = function (S) {
  const result = [];
  const finalCountsMap = new Object();
  let runningCountsMap = new Object();

  const chrs = S.split("");
  chrs.forEach((chr) => {
    if (!finalCountsMap[chr]) {
      finalCountsMap[chr] = 1;
    } else {
      finalCountsMap[chr] += 1;
    }
  });

  let windowRear = 0;
  for (let i = 0; i < chrs.length; i++) {
    if (!runningCountsMap[chrs[i]]) {
      runningCountsMap[chrs[i]] = 1;
    } else {
      runningCountsMap[chrs[i]] += 1;
    }
    if (allMatch(runningCountsMap, finalCountsMap)) {
      result.push(i - windowRear + 1);
      windowRear = i + 1;
      runningCountsMap = new Object();
    }
  }
  return result;
};

const allMatch = (runningCountsMap, finalCountsMap) => {
  let result = true;
  Object.keys(runningCountsMap).forEach((key) => {
    if (runningCountsMap[key] !== finalCountsMap[key]) {
      result = false;
    }
  });
  return result;
};