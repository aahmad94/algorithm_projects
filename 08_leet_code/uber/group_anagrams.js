var groupAnagrams = function (words) {
  const anagramsMap = {};
  words.forEach(word => {
    // sort each word to see if it exists in our map
    const sortedWord = word.split("").sort().join();
    // if the sorted word exists in our map,
    // push the original word into the arr
    if (anagramsMap[sortedWord]) {
      anagramsMap[sortedWord].push(word);
    } else {
      // else set the initial key to be the sorted word
      anagramsMap[sortedWord] = [word];
    }
  });
  return Object.values(anagramsMap);
};

const arr = ["tea", "ate", "eat", "dog", "god"];
