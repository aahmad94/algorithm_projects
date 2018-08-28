package BST;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

public class BinarySearchTree {
	private TreeNode tree;
	
	public BinarySearchTree(List<Integer> nums) {
		Collections.sort(nums);
		this.tree = buildBST(null, nums);
	}
	
	public TreeNode getTree() {
		return tree;
	}

	public static TreeNode buildBST(TreeNode node, List<Integer> nums) {
		if (nums.size() == 1) return new TreeNode(nums.get(0));
		if (nums.size() == 0) return new TreeNode(null);
		Integer midIdx = nums.size() / 2;
		
		TreeNode root = new TreeNode(nums.get(midIdx));
		root.setLeft(buildBST(root, nums.subList(0, midIdx)));
		root.setRight(buildBST(root, nums.subList(midIdx + 1, nums.size())));
		
		
		return root;
	}
	
}
