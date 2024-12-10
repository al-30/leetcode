package main

import "fmt"

var alf string

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if j, exists := m[complement]; exists {
			return []int{j, i}
		}
		m[num] = i
	}
	return nil
}
func main() {
	nums := []int{3, 2, 4}
	fmt.Println(twoSum(nums, 6))
}
