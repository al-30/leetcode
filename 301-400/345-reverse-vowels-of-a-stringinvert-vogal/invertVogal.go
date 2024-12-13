package main

import "strings"

func reverseVowels(s string) string {

	char := map[string]string{
		"A": "A",
		"a": "a",
		"E": "E",
		"e": "e",
		"I": "I",
		"i": "i",
		"O": "O",
		"o": "o",
		"U": "U",
		"u": "u",
	}
	n2 := strings.Split(s, "")
	left := 0
	rigth := len(s) - 1

	for left < rigth {
		_, existsLeft := char[string(n2[left])]
		_, existsRigth := char[string(n2[rigth])]

		if existsLeft && existsRigth {
			n2[left], n2[rigth] = n2[rigth], n2[left]
			left++
			rigth--
		} else if !existsLeft && !existsRigth {
			left++
			rigth--
		} else if !existsRigth {
			rigth--
		} else {
			left++
		}
	}
	return strings.Join(n2, "")
}
func main() {
	nome := "IceCreAm"
	reverseVowels((nome))
}
