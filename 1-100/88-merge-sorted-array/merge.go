package main

import "slices"

func merge(nums1 []int, m int, nums2 []int, n int) {

	j := 0
	for i := 0; i < len(nums1); i++ {
		if nums1[i] == 0 {
			nums1[i] = nums2[j]
			j++
		}
		if j == n {
			break
		}
	}
	slices.Sort(nums1)
}
func main() {
	nums := []int{-1, 0, 0, 3, 3, 3, 0, 0, 0}
	m := 6
	nums2 := []int{1, 2, 2}
	n := 3
	merge(nums, m, nums2, n)
}
