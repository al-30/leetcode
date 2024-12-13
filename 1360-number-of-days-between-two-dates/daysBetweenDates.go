package main

import (
	"math"
	"time"
)

func daysBetweenDates(date1 string, date2 string) int {
	newDate1, _ := time.Parse("2006-01-02", date1)
	newDate2, _ := time.Parse("2006-01-02", date2)

	result := (newDate2.Sub(newDate1).Hours()) / 24
	return int(math.Abs(float64(result)))
}

func main() {
	date1 := "2019-06-29"
	date2 := "2019-06-30"
	daysBetweenDates(date1, date2)
}
