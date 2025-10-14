class LinkedList {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

var insertionSortList = function (head) {
    if (!head) {
        return head;
    }
    let dummy = new LinkedList(0, head)

    let prev = head, cu = head.next
    while (cu != null) {
        if (cu.val >= prev.val) {
            [cu, prev] = [cu.next, cu]
            continue
        }

        let temp = dummy;
        while (temp.next && temp.next.val < cu.val) temp = temp.next;

        prev.next = cu.next;
        cu.next = temp.next;
        temp.next = cu;
        cu = prev.next;
    }
    return dummy.next
}


const head = new LinkedList(5,
    new LinkedList(2,
        new LinkedList(6,
            new LinkedList(1,
                new LinkedList(3,
                    new LinkedList(4))))));
insertionSortList(head);




// function insertionSortAnalyzer(arr, comparator) {

//     for (let i = 1; i < arr.length; i++) {
//         let k = arr[i]
//         let j = i - 1
//         for (; j >= 0 && comparator(arr[j], k) > 0; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = k
//     }
//     return arr
// }


// const result = insertionSortAnalyzer([-1, 5, 3, 4, 0], (a, b) => a - b);
// console.log(result);