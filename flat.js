var flat = function (arr, n) {
    let f = (res, a, s) => {
        if (s === n) return res.concat(a)
        a.forEach(e => {
            if (Array.isArray(e)) {    
                res.push(...f([],e, s + 1));
            } else {
                res.push(e);
            };
        });
        return res;
    }
    return f([], arr,0);
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));