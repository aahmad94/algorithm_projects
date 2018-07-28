// map: 
// "1" => "a"
// "2" => "b"
// "3" => "c"
// "12" => "l"

// input: "12", ouput: "2"

const numWays = (str) => {
  return helper(str, str.length);
};


const helper = (str, k) => {
  if (k === 0) return 1;
  const i = str.length - k;
  if (str[i] === "0") return 0;

  let res = helper(str, k - 1);
  if (k >= 2 && parseInt(str.slice(i, i + 2)) <= 26) {
    res += helper(str, k - 2); 
  }
  return res;
};

const numWaysDp = (str) => {
  const memo = new Array(str.length);
  return helperDp(str, str.length, memo);
};

const helperDp = (str, k, memo) => {
  if (k === 0) return 1;
  const i = str.length - k;
  if (str[i] === "0") return 0;
  if (memo[k]) return memo[k];
  let res = helperDp(str, k - 1, memo);
  if (k >= 2 && parseInt(str.slice(i, i + 2)) <= 26) {
    res += helperDp(str, k - 2, memo); 
  }
  memo[k] = res;
  return res;
};

// console.log(numWaysDp("12"));
console.log(numWaysDp("111"));
