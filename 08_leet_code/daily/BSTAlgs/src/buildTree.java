import java.util.ArrayList;
import java.util.Queue;
import java.util.LinkedList;
import java.util.List;
import BST.BinarySearchTree;

import BST.TreeNode;

public class buildTree {
	public static void main(String[] args) {
		List<Integer> nums = new ArrayList<Integer>();
		nums.add(10);
		nums.add(8);
		nums.add(2);
		nums.add(3);
		nums.add(17);
		
		BinarySearchTree tree = new BinarySearchTree(nums);
		bfs(tree.getTree());
	}
	
	public static void bfs(TreeNode root) {
		Queue<TreeNode> queue = new LinkedList<TreeNode>();
		queue.add(root);
		while (queue.isEmpty() == false) {
			TreeNode node = queue.poll();
			
			System.out.println(node.getVal());
			
			if (node.getLeft() != null) {
				queue.add(node.getLeft());
			}
			if (node.getRight() != null) {
				queue.add(node.getRight());
			}
		}
		
	}
}
