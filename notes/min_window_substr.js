var minWindow = function (s, t) {
  if (t.length > s.length) {
    return false;
  }

  let startIdx;
  let endIdx;
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
    const chr = s[j];

    if (tChrCts[chr]) {
      tempSubStrChrCts[chr]++;
    }

    if (match(tChrCts, tempSubStrChrCts)) {
      if (!startIdx || j - i <= endIdx - startIdx) {
        startIdx = i;
        endIdx = j;
      }

      // reset tempSubStrChrCts 
      for (let key in tChrCts) {
        if (key) {
          tempSubStrChrCts[key] = 0;
        }
      }

      if (pointer) {
        i = pointer;
        pointer = null;
        j = i;
        continue;
      }
    }

    if (tChrCts[s[j]] && !pointer && s.length - j > t.length) {
      pointer = j;
    }

    if (j < s.length) {
      j++;
    } else {
      i++;
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