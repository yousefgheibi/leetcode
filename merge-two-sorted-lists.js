class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode();
    let current = dummy;


    while (list1.val !== 0 && list2.val !== 0) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
}


const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList);