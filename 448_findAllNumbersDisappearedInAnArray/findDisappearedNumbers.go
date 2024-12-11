package main

func findDisappearedNumbers(nums []int) []int {
	compar := make(map[int]int)

	for _, l := range nums {
		compar[l] = l
	}
	result := []int{}
	for i := 1; i <= len(nums); i++ {

		if _, exists := compar[i]; !exists {
			result = append(result, i)
		}
	}
	return result
}

func main() {
	nums := []int{1, 1}
	findDisappearedNumbers(nums)
}
