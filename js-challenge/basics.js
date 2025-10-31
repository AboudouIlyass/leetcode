//
var createCounter = function (n) {
    return function () {
        return n++
    };
};

//
var addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([x, y]) => x + y)
};

//
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(millis)
        }, millis)
    })
}

//
var cancellable = function (fn, args, t) {
    let timer;
    timer = setTimeout(() => {
        fn(...args)
    }, t)
    return f = () => {
        clearTimeout(timer)
    }
};

//
var cancellable = function (fn, args, t) {
    let timer;
    fn(...args)
    timer = setInterval(() => {
        fn(...args)
    }, t)
    return () => {
        clearInterval(timer)
    }
};

//
var timeLimit = function (fn, t) {

    return async function (...args) {
        let a = fn(...args)
        let b = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        })

        return await Promise.race([a, b])
    };
};

//
var expect = function (val) {
    return {
        toBe: (v) => {
            if (v === val) return true;
            else throw new Error("Not Equal");
        },
        notToBe: (v) => {
            if (v !== val) return true;
            else throw new Error("Equal");
        }
    }
};


//
var TimeLimitedCache = function () {
    this.store = {}

    this.get = (key) => {
        return this.store[key] ? this.store[key].value : -1
    }

    this.set = (key, value, duration) => {
        let timer;
        timer = setTimeout(() => {
            delete this.store[key]
        }, duration)
        if (this.store[key]) {
            clearTimeout(this.store[key].timer)
            this.store[key] = { value, timer };
            return true
        } else {
            this.store[key] = { value, timer };
            return false
        }
    }

    this.count = () => {
        return Object.keys(this.store).length
    }
};

//
// var promiseAll = function(functions) {
//    return Promise.all(functions.map(f => f()))
// };
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let res = new Array(functions.length), count = 0;
        for (let i = 0; i < functions.length; i++) {
            (functions[i])()
                .then((el => {
                    res[i] = (el);
                    count++;
                    if (functions.length === count) resolve(res);
                }))
                .catch((err) => reject(err))
        }
    })
};

//
var isEmpty = function (obj) {
    return JSON.stringify(obj).length !== 2
};

//
var chunk = function (arr, size) {
    let res = []
    while (arr.length !== 0) {
        res.push(arr.slice(0, size))
        arr.splice(0, size)
    }
    return res
};

//
Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : -1
};

//
Array.prototype.groupBy = function (fn) {
    let res = {}
    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i])
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(this[i]);
    }
    return res
};

//
var join = function (arr1, arr2) {
    let conc = arr1.concat(arr2);
    let t = new Map();
    for (let i of conc) {
        let temp, pu = { ...i };
        if (t.has(i.id)) {
            temp = t.get(i.id);
            for (let key in temp) {
                if (!(key in pu)) {
                    pu[key] = temp[key];
                }
            }
        }
        t.set(i.id, pu);
    }
    let sort_t = [...t].sort((x, y) => x[0] - y[0]);
    return sort_t.map(e =>
        Object.fromEntries(Object.keys(e[1]).sort().map(j => [j, e[1][j]]))
    );
};

//



// https://leetcode.com/studyplan/30-days-of-javascript/