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
    const func = async () => {
        let p = [];
        let c = functions.length
        const r = async () => {
            await new Promise((resolve, reject) => {
                for (f of functions) {
                    const e = f()
                    e.then((re) => {
                        p.push(re);
                        c--
                        if (c === 0) resolve()
                    }).catch((re) => {
                        reject(re)
                    })
                }
            })
            return p
        }
    
        const res = await r();
        return res;
    }
    return func()
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]

// https://leetcode.com/studyplan/30-days-of-javascript/