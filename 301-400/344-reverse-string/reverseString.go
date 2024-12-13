package main

func reverseString(s []byte) {
	rigth := len(s) - 1

	for i := 0; i < (len(s) / 2); i++ {
		s[i], s[rigth] = s[rigth], s[i]
		rigth--
	}
}
func main() {

	s := []byte{'g', 'a', 'b', 'r', 'i', 'e', 'l'}
	reverseString(s)
}
