function isSnakePath(grid) {
    return DFS(grid, 0, 0, new Map())
}

function DFS(g, i, j, v) {

    if (i === g.length) {
        return true
    }

    if (j === g[i].length) {
        return DFS(g, i + 1, 0, v)
    }

    let now = () => g[i][j] === 1
    let f = JSON.stringify(i, j)

    if (now && !v.has(i - 1, j) && !v.has(i, j - 1) && v.size !== 0 && i !== 0 && j !== 0) {
        return false
    }

    if (g[i][j] === 1) {
        v.set(f, f)
        if (j + 1 < g[i].length) DFS(g, i, j + 1, v)
        if (i + 1 < g.length) DFS(g, i + 1, j, v)
    }
    return DFS(g, i, j+1, v)
}



const grid1 = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
];

const grid2 = [
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
];

console.log(isSnakePath(grid1)); // true
console.log(isSnakePath(grid2)); // false