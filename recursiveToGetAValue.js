class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node('D');

// link above nodes togehter
// A -> B -> C -> D -> NULL
a.next = b;
b.next = c;
c.next = d;

function getNodeValue(head, index){
    if (head === null) return null;  // base case 1
    if (index === 0) return head.val;  // base case 2
    return getNodeValue(head.next, index - 1);
}

getNodeValue(a, 1)    // "B"
getNodeValue(b, 2)    // "D"
getNodeValue(a, 7)    // null
getNodeValue(a, 0)    // "A"