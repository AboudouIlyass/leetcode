
var generateMatrix = function (n) {

    let max = n * n, count = 1;
    let res = Array.from({ length: n }).map(() => Array.from({ length: n }))
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (count <= max) {

        for (let i = left; i <= right; i++) {
            res[top][i] = count;
            count++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            res[i][right] = count;
            count++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            res[bottom][i] = count;
            count++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            res[i][left] = count;
            count++;
        }
        left++;
    }
    return res
};

generateMatrix(1)
