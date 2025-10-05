var reduce = function (nums, fn, init) {
    if (typeof init === "undefined") init = 0;

    nums.forEach(e => {
        init = fn(init, e);
    });

    return init;
};

reduce([1, 2], (acc, key) => key + 1, 0)