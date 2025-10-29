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
var TimeLimitedCache = function () {
   
    this.get = (key) => {
    }

    this.set = (key, value, duration) => {
    }

    this.count = () => {
    }
};
// https://leetcode.com/studyplan/30-days-of-javascript/