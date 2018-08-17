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
		ListNode newList = remove(list, 0);
		StringBuilder sb = new StringBuilder();
		while (newList != null) {
			sb.append(newList.getVal());
			sb.append("\t");
			newList = newList.getNext();
		}
		System.out.println(sb);
	}
	
	public static ListNode remove(ListNode list, int k) {
		if (list == null) return null;
		ListNode head = new ListNode(0);
		head.setNext(list);
		ListNode rear = head;
		ListNode front = list;
		int i = 0;
		while(i < k) {
			rear = rear.getNext();
			front = front.getNext();
			i++;
		}
		if (front != null) {
			rear.setNext(front.getNext());
		} else {
			rear.setNext(null);
		}
		return head.getNext();
	}
}