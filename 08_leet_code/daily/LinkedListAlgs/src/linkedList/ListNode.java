package linkedList;

import java.util.ArrayList;

public class ListNode {
	private double val;
	private ListNode next;
	
	public ListNode(double val) {
		this.val = val;
		this.next = null;
	}

	public double getVal() {
		return val;
	}

	public void setVal(double val) {
		this.val = val;
	}

	public ListNode getNext() {
		return next;
	}

	public void setNext(ListNode next) {
		this.next = next;
	}
	
	public static ListNode arrToList(ArrayList<Integer> nums) {
		ListNode head = new ListNode(nums.get(0));
		for (int i = 1; i < nums.size(); i++) {
			head.setNext(new ListNode(nums.get(i)));
		}
		return head;
	}
	
}
