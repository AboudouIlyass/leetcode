package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	li := &ListNode{Val: 1,
		Next: &ListNode{Val: 2,
			Next: &ListNode{Val: 3,
				Next: &ListNode{Val: 4,
					Next: &ListNode{Val: 5,
						Next: &ListNode{Val: 6,
							Next: &ListNode{Val: 7}}}}}}}
	reverseBetween(li, 2, 5)
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	du := &ListNode{Next: head}
	prev := du

	for i := 1; i < left; i++ {
		prev = prev.Next
	}

	cu := prev.Next
	r := Reverse(cu, right)

	Printt(r)
	Printt(prev)
	return du.Next
}

func Reverse(l *ListNode, rigth int) *ListNode {
	if l == nil || l.Next == nil {
		return l
	}

	cu := l
	var rev *ListNode

	for rigth > 0 {
		rigth--
		temp := cu.Next
		cu.Next = rev
		rev = cu
		cu = temp

		if rigth == cu.Val {
			break
		}
	}
	return rev
}

func Printt(l *ListNode) {
	cu := l
	for cu != nil {
		fmt.Print(cu.Val, "- ")
		cu = cu.Next
	}
	fmt.Println()
}
