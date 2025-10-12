package main

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func printt(l *ListNode) {
	cu := l
	for cu != nil {
		fmt.Print(cu.Val, "- ")
		cu = cu.Next
	}
	fmt.Println()
}

func reverse(head *ListNode, k int) *ListNode {
	count := 0
	cu := head
	var pr *ListNode
	for k > 0 {
		count++
		temp := cu.Next
		cu.Next = pr
		pr = cu
		cu = temp
		k--
	}
	return pr
}

func reverseKGroup(head *ListNode, k int) *ListNode {

	if head == nil || head.Next == nil {
		return head
	}


	var new, last *ListNode
	d := &ListNode{}
	t := d
	cu := head
	for {
		last = head
		i := 0
		for i = 0; i < k && cu != nil; i++ {
			cu = cu.Next
		}
		if i < k {
			for t.Next != nil {
				t = t.Next
			}
			t.Next = last
			break
		}
		new = reverse(head, k)
		head = cu
		for t.Next != nil {
			t = t.Next
		}
		t.Next = new
	}
	return d.Next
}

// func main() {
// 	li := &ListNode{Val: 1,
// 		Next: &ListNode{Val: 2,
// 			Next: &ListNode{Val: 3,
// 				Next: &ListNode{Val: 4,
// 					Next: &ListNode{Val: 5,
// 						Next: &ListNode{Val: 6,
// 							Next: &ListNode{Val: 7}}}}}}}
// 	(reverseKGroup(li, 2))
// }
