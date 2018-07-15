var findAnagrams = function (s, p) {
  const result = [];

  const pCounts = {};
  for (let i = 0; i < p.length; i++) {
    if (pCounts[p[i]]) {
      pCounts[p[i]] += 1;
    } else {
      pCounts[p[i]] = 1;
    }
  }

  // maintain the property that an anagram exists starting at s[i] when comparisonCounts === 0
  let comparisonCount = p.length;

  // initialize
  // initialize
  for (let i = 0; i < p.length; i++) {
    if (pCounts[s[i]] !== undefined && pCounts[s[i]] > 0) {
      comparisonCount--;
    }

    if (pCounts[s[i]] !== undefined) {
      pCounts[s[i]]--;
    }
  }

  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (comparisonCount === 0) {
      result.push(i);
    }

    // if s[i] exists in pCounts, we decremented it's value prior, either on initialization or below
    // where we look at i + p.length ahead; as such if s[i] exists in pCounts,
    // we increment the pCount and also the comparisonCount if pCounts[s[i]] >= 0 here
    if (pCounts[s[i]] !== undefined && pCounts[s[i]] >= 0) {
      comparisonCount++;
    }

    if (pCounts[s[i]] !== undefined) {
      pCounts[s[i]]++;
    }

    // i + p.length corresponds to the position our 'window front'; 
    // if the chr at s[i + p.length] exists in pCounts, we decremenet the pCount and
    // also the comparisonCount pCounts[s[i + p.length]] > 0
    // this allows us to determine if the next position (s[i + 1]) is the start 
    // of a new anagram by maintaining the comparisonCount property we defined above

    // ex1. 
    // p = ab
    // s = abab
    // ab, ba, ab are all valid anagrams
    // ex2.
    // p = abc
    // s = abcabc
    // abc, bca, cab, abc are all valid anagrams
    if (pCounts[s[i + p.length]] !== undefined && pCounts[s[i + p.length]] > 0) {
      comparisonCount--;
    }

    if (pCounts[s[i + p.length]] !== undefined) {
      pCounts[s[i + p.length]]--;
    }
  }
  return result;
};

console.log(findAnagrams("aab", "ab"));
