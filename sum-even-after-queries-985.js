var sumEvenAfterQueries = function (nums, queries) {
    let res = []
    for (let i = 0; i < queries.length; i++) {
        let e = queries[i][0]
        let ind = queries[i][1]
        
        nums[ind] += e;
        
        let arr = nums.filter(e => e%2 === 0)
        let sum = arr.reduce((count, val) => count+val, 0)
        res.push(sum)
    }
    return res
};


console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]])); // [0]  

