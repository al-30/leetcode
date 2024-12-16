class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function createList(numbers: number[], indice = 0, cur: ListNode | null = null): ListNode {
  cur = new ListNode(numbers[indice]);
  if (numbers[indice + 1]) {
    cur.next = createList(numbers, indice + 1, cur.next);
  }
  return cur;
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let totalItems = 0;
  let current = head;

  while (current) {
    totalItems++;
    current = current.next;
  }

  let node = totalItems - n - 1;
  current = head;

  while (current && node > 0) {
    current = current.next;
    node--;
  }

  if (current === head) {
    if (n === totalItems && current) {
      return current?.next;
    } else if (current?.next?.next === null) {
      current.next = null;
      return current;
    }
  }

  if (current?.next) {
    current.next = current.next.next;
    return head;
  }

  return head;
}

const case1 = createList([1, 2, 3, 4, 5]);
removeNthFromEnd(case1, 2);
