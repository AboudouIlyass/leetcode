package main

func removeDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	c := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != nums[c] {
			c++
			nums[c] = nums[i]
		}
	}
	nums = nums[:c+1]
	return c + 1
}
