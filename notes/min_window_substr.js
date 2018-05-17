var minWindow = function (s, t) {
  if (t.length > s.length) {
    return false;
  }

  let startIdx;
  let endIdx;

  let increment = false;
  let pointer;

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
      if (s[i - 1] && tChrCts[s[i - 1]]) {
        tempSubStrChrCts[s[i - 1]]--;
      }

      // if i meets the pointer, set the increment bool to false
      if (i === pointer) {
        pointer = null;
        increment = false;
      }

      if (increment) {
        i++;
      }

      continue;
    }

    if (tChrCts[s[j]]) {
      if (!pointer) {
        pointer = j;
      }
      tempSubStrChrCts[s[j]]++;
    }

    if (match(tChrCts, tempSubStrChrCts)) {
      if (!startIdx || j - i <= endIdx - startIdx) {
        startIdx = i;
        endIdx = j;
      }

      increment = true;
      continue;
    }

    if (j < s.length) {
      j++;
    }
  }

  if (startIdx) {
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