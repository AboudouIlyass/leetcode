var climbStairs = function (n) {
    if (n === 0 || n === 1) return 1

    let r = 1, l=1
    for (let i=2;  i<=n; i++){
        [l, r] = [r, r+l]
    }
    return r
}

console.log(climbStairs(45));
