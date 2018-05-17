var minWindow = function (s, t) {
  if (t.length > s.length) {
    return "";
  }

  let startIdx;
  let endIdx;

  let prevI = 0;
  let prevJ = 0;

  let increment = false;

  const tChrCts = chrCts(t);
  const tempSubStrChrCts = {};

  // initialize tempSubStrChrCts w/ tStrChrs and set vals/cts to 0
  for (let key in tChrCts) {
    if (key) {
      tempSubStrChrCts[key] = 0;
    }
  }

  for (let i = 0, j = 0; i <= s.length;) {
    // handle i incrementing
    if (increment) {
      if (s[i - 1] && i > prevI && tChrCts[s[i - 1]]) {
        tempSubStrChrCts[s[i - 1]]--;
      }

      // if i meets the pointer, set the increment bool to false
      if (i > prevI && tChrCts[s[i]]) {
        prevI = i;
        increment = false;
      }

      if (increment) {
        i++;
      }

      continue;
    }

    if ((!prevJ || j > prevJ) && tChrCts[s[j]]) {
      prevJ = j;
      tempSubStrChrCts[s[j]]++;
    }

    if (match(tChrCts, tempSubStrChrCts)) {
      const smallerRange = (j - i) <= (endIdx - startIdx);
      if (!(startIdx >= 0) || smallerRange) {
        startIdx = i;
        endIdx = j;
      }

      increment = true;
      continue;
    }

    if (j < s.length) {
      j++;
    } else {
      break;
    }
  }

  if (startIdx >= 0) {
    return s.slice(startIdx, endIdx + 1);
  } else {
    return "";
  }
};

const chrCts = (str) => {
  const chrCts = {};
  str.split("").forEach(chr => {
    if (chrCts[chr]) {
      chrCts[chr]++;
    } else {
      chrCts[chr] = 1;
    }
  });
  return chrCts;
};

const match = (tChrCts, tempSubStrChrCts) => {

  for (let key in tChrCts) {
    if (!tempSubStrChrCts[key] || tempSubStrChrCts[key] < tChrCts[key]) {
      return false;
    }
  }

  return true;
};