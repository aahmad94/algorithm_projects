package BST;

public class TreeNode {
	private Integer val;
	private TreeNode left;
	private TreeNode right;
	
	public TreeNode(Integer val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}

	public double getVal() {
		return val;
	}

	public void setVal(Integer val) {
		this.val = val;
	}

	public TreeNode getLeft() {
		return left;
	}

	public void setLeft(TreeNode left) {
		this.left = left;
	}

	public TreeNode getRight() {
		return right;
	}

	public void setRight(TreeNode right) {
		this.right = right;
	}
}
