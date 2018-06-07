var groupAnagrams = function (words) {
  const anagramsMap = {};
  words.forEach(word => {
    const sortedWord = word.split("").sort().join();
    if (anagramsMap[sortedWord]) {
      anagramsMap[sortedWord].push(word);
    } else {
      anagramsMap[sortedWord] = [word];
    }
  });
  return Object.values(anagramsMap);
};