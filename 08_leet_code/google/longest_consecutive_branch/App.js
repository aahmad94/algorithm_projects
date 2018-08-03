class App {
  constructor(Algorithm, TreeNode) {
    const root = new TreeNode(25);
    root.left = new TreeNode(40);
    root.right = new TreeNode(26);
    root.right.left = new TreeNode(27);
    this.root = root;
    this.Algorithm = Algorithm;
  }

  runAlg() {
    return this.Algorithm.longestConsecutiveBranch(this.root);
  }
}

const Algorithm = require("./Algorithm");
const TreeNode = require("./TreeNode.js");
console.log(new App(Algorithm, TreeNode).runAlg());