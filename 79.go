package main

// func main() {
// 	board := [][]byte{
// 		{'a'},
// 	}
// 	word := "a"
// 	a := exist(board, word)
// 	fmt.Println(a)
// }

type Visited struct{ i, j int }

func exist(board [][]byte, word string) bool {
	if len(word) == 0 {
		return true
	}
	if len(board) == 0 || len(board[0]) == 0 {
		return false
	}
	for i := range board {
		for j := range board[i] {
			if DFS(board, word, i, j, 0, map[Visited]bool{}) {
				return true
			}
		}
	}
	return false
}

func DFS(b [][]byte, w string, i, j, k int, seen map[Visited]bool) bool {
	if k == len(w) {
		return true
	}

	if b[i][j] != w[k] {
		return false
	}
	if k == len(w)-1 {
		return true
	}

	k++

	seen[Visited{i, j}] = true
	//rigth
	if j+1 < len(b[i]) && !seen[Visited{i, j + 1}] {
		if DFS(b, w, i, j+1, k, seen) {
			return true
		}
	}
	// down
	if i+1 < len(b) && !seen[Visited{i + 1, j}] {
		if DFS(b, w, i+1, j, k, seen) {
			return true
		}
	}
	// up
	if i-1 >= 0 && !seen[Visited{i - 1, j}] {
		if DFS(b, w, i-1, j, k, seen) {
			return true
		}
	}
	// left
	if j-1 >= 0 && !seen[Visited{i, j - 1}] {
		if DFS(b, w, i, j-1, k, seen) {
			return true
		}
	}
	seen[Visited{i, j}] = false
	return false
}
