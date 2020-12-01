describe("", () => {
  class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    // Insert first node
    insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
    // Insert last node
    insertLast(data) {
      let node = new Node(data);
      let current;
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
    // Insert at index
    insertAt(data, index) {
      // If index is out of range
      if (index > 0 && index > this.size) {
        return;
      }
      // If first index
      if (index === 0) {
        this.head = this.insertFirst(data, this.head);
        return;
      }

      const node = new Node(data);
      let current, previous;
      // Set current to first

      current = this.head;
      let count = 0;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }

    printListData() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  it("", () => {
    const n1 = new Node(100);
    const n2 = new Node(200);
    const ll = new LinkedList();
    ll.insertFirst(100);
    ll.insertFirst(200);
    ll.insertFirst(300);
    ll.insertLast(400);
    ll.insertAt(500, 2);
    console.log(ll.printListData());
  });
});
