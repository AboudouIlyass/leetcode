
var reverse = function (x) {
    if ((x > (2 ** 31) - 1) || (x < -(2 ** 31))) {
        return 0
    }
    let isNeg = false;
    if (x < 0) {
        isNeg = true;
        x = -x
    }
    let c = x;

    let n = 0;
    while (c >= 1) {
        let r = Math.floor(c % 10);
        n = (n * 10) + r;
        c /= 10;
    }
    if (n > 2 ** 31 - 1) return 0;
    return isNeg ? -n : n
};

a = reverse(1534236469)
console.log(a);
