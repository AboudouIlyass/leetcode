package main

func main() {
	board := [][]byte{
		{'A', 'B', 'C', 'E'},
		{'S', 'F', 'C', 'S'},
		{'A', 'D', 'E', 'E'},
	}

	word := "ABCCED" // should return true
	// word2 := "SEE"   // should return true
	// word3 := "ABCB"  // should return false
	exist(board, word)
}

func exist(board [][]byte, word string) bool {
	rec(board, word, 0, 0, 0)
	return false
}

func rec(b [][]byte, w string, i, j, k int) [][]byte {

}
