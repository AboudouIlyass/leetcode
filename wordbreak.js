var wordBreak = function (s, wordDict) {
    const include = (str, s) => {
        const res = [];
        for (let i = 0; i <= str.length - s.length; i++) {
            if (str.slice(i, i + s.length) === s) {
                res.push({ start: i, end: i + s.length });
            }
        }
        return res;
    };

    let exist = new Set();
    for (let i = 0; i < wordDict.length; i++) {
        let m = include(s, wordDict[i])
        if (m) {
            for (let j = 0; j < m.length; j++) {
                exist.add(`${m[j].start}:${m[j].end}`);
            }
        }
    }

    wordDict.forEach((ele) => {

        let q = include(s, ele)
        if (q !== null && q.length !== 0) {
            q.forEach(inc => {
                if (inc !== null) {
                    let x = inc.start, y = inc.end;
                    for (let i = x; i < y; i++) {
                        exist.add(i);
                    };
                };
            });
        }
    });
    for (let i = 0; i < s.length; i++) {
        if (!exist.has(i)) {
            return false;
        }
    }
    return true;
};


s = "leetcodeleet", wordDict = ["leet", "code"]
let a = wordBreak(s, wordDict)
console.log(a);

