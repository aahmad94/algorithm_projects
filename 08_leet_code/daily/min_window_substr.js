var minWindow = function (s, t) {
  if (t.length > s.length) {
    return "";
  }

  let startIdx;
  let endIdx;

  let prevI = 0;
  let prevJ = 0;

  let incrementI = false;

  const tCts ={};

  // set up t counter obj
  t.split("").forEach(chr => {
    if (tCts[chr]) {
      tCts[chr]++;
    } else {
      tCts[chr] = 1;
    }
  });

  const currCts = {};

  // initialize currCts w/ tStrChrs and set vals/cts to 0
  for (let key in tCts) {
    if (key) {
      currCts[key] = 0;
    }
  }

  for (let i = 0, j = 0; i <= s.length;) {
    // handle i incrementing
    if (incrementI) {
      if (s[i - 1] && i > prevI && tCts[s[i - 1]]) {
        currCts[s[i - 1]]--;
      }

      // if i meets the next t char, set the incrementI bool to false
      if (i > prevI && tCts[s[i]]) {
        prevI = i;
        incrementI = false;
      }

      if (incrementI) {
        i++;
      }

      continue;
    }

    if ((j === 0 || j > prevJ) && tCts[s[j]]) {
      prevJ = j;
      currCts[s[j]]++;
    }

    if (tCts[s[j]] && validWindow(tCts, currCts)) {
      const smallerRange = (j - i) <= (endIdx - startIdx);
      if (!(startIdx >= 0) || smallerRange) {
        startIdx = i;
        endIdx = j;
      }

      // if valid, set incrementI bool to true and don't increment j -- continue
      incrementI = true;
      continue;
    }

    // increment j
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

const validWindow = (tCts, currCts) => {

  for (let key in tCts) {
    if (currCts[key] < tCts[key]) {
      return false;
    }
  }

  return true;
};

// time complexity assuming t.len << s.len ~ O(2n), otherwise O(n^2)