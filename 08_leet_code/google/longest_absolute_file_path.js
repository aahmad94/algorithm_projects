var lengthLongestPath = function (input) {
  if (input === null || input.length === 0) {
    return 0;
  }
  //this array will be a index based tracker for the length at each
  //level of our directory
  let tracker = [];
  let ans = 0;
  for (let path of input.split("\n")) {
    let level = path.lastIndexOf("\t") + 1;
    //the first tab will always be after the newline so its index will be 0
    //each tab after a newline means a new directory, so two means a nested one, level 2;
    //set our tracker at this level to be the one with the longest path
    //check the parent level to see if its a nested dir
    tracker[level] = path.length - level + (level > 0 ? tracker[level - 1] : 0);
    //here we minus level to get rid of the tab character
    if (path.indexOf(".") != -1) {
      //if we see a file in our path then
      //we want to see if its the longest file path we have seen
      //we need to add level to our current path length beacuse we removed our tab
      //but we need to add in a "/" for every level we take
      ans = Math.max(ans, tracker[level] + level)
    }
  }
  return ans;
};