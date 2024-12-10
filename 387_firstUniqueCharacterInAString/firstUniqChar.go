package main

func firstUniqChar(s string) int {
	arr := []rune(s)
	repet := make(map[rune]int)

	for _, char := range arr {
		repet[char]++
	}

	for i, char := range arr {
		if repet[char] == 1 {
			return i
		}
	}

	return -1
}

func main() {
	s := "aabb"
	firstUniqChar(s)
}
