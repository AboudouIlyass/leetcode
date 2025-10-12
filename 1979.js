var findGCD = function (nums) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    for (let i = min; i > 0; i--) {
        if (max % i === 0 && min % i === 0) return i
    }
    return 1
};

a = findGCD([3, 3])
console.log(a);
