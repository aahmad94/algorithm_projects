import java.util.ArrayList;
import linkedList.ListNode;

public class removeKthNode {
	public static void main(String[] args) {
		ArrayList<Integer> nums = new ArrayList<Integer>();
		nums.add(1);
		nums.add(2);
		nums.add(3);
		nums.add(4);
		
		ListNode list = ListNode.arrToList(nums);
		System.out.println(remove(list, 0).getVal());
	}
	
	public static ListNode remove(ListNode list, int k) {
		ListNode head = list;
		ListNode rear = list;
		ListNode front = list.getNext();
		int i = 0;
		while(front != null && i < k) {
			rear = front.getNext();
			front = front.getNext();
		}
		if (front != null && front.getNext() != null) {
			rear.setNext(front.getNext());
		}
		return head;
	}
}