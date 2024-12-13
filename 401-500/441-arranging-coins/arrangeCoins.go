package main

import "fmt"

func arrangeCoins(n int) int {
	rows := 0
	for n > rows {
		rows = rows + 1
		n = n - rows
	}
	return rows

}
func main() {
	fmt.Println(arrangeCoins(5))
}
