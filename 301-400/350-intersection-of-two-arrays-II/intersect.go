package main

import (
	"sort"
)

func intersect(nums1 []int, nums2 []int) []int {
	v := []int{}
	sort.Ints(nums1)
	sort.Ints(nums2)
	left := len(nums1) - 1
	rigth := len(nums2) - 1

	for left >= 0 && rigth >= 0 {
		if nums1[left] == nums2[rigth] {
			v = append(v, nums1[left])
			left--
			rigth--
		} else if nums1[left] > nums2[rigth] {
			left--
		} else {
			rigth--
		}
	}

	return v
}

func main() {
	n1 := []int{1, 2, 2, 1}
	n2 := []int{2, 2}
	intersect(n1, n2)
}
