// Definition for singly-linked arr:
function ListNode(x) {
    this.value = x;
    this.next = null;
}

function removeKFromList(l, k) {
    let prev = null;
    let head = l;

    while (l) {

        //head case
        if (l.value === k && l === head) {
            head = l.next;
        // tail case 
        } else if (l.value === k && l.next === null) {
            prev.next = null;
        // middle case
        } else if (l.value === k) {
            prev.next = l.next;
            l = prev.next;
            continue;
        // exit case 
        } else if (l.next === null) {
            return head;
        }

        prev = l;
        l = l.next;


    }
    return head;
}
