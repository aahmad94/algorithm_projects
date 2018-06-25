const isPalindrome = (str) => {
  const testStr = str.replace(/\W/g, '').toLowerCase();
  const lastIdx = testStr.length - 1;
  for (let i = 0, j = lastIdx; i < str.length; i++, j--) {
    // test str is even length
    if (i > j) break;
    // test str is odd length
    if (i === j && testStr[i] === testStr[j]) {
      break;
    }
    if (testStr[i] !== testStr[j]) {
      return false;
    }
  }

  return true;
};

const testCases = [
  "noon",
  "Radar",
  "Nurses Run!",
  "A man, a plan, a canal, Panama!" 
  ];

for (let i = 0; i < testCases.length; i++) {
  console.log(testCases[i], isPalindrome(testCases[i]));  
}