var threeSum = function (nums) {
    if (nums.length < 3) return [];

    nums = nums.sort((a, b) => a - b);
    let res = [];
    const s = new Set()

    for (let i = 0; i < nums.length; i++) {
        l = i + 1;
        r = nums.length - 1;

        while (l < r) {

            let sum = nums[l] + nums[r] + nums[i];
            if (sum === 0) {
                let sorted = [nums[i], nums[r], nums[l]].sort((a, b) => a - b);
                if (!s.has(JSON.stringify(sorted))) {
                    res.push([nums[l], nums[r], nums[i]]);
                    s.add(JSON.stringify(sorted))
                }
                r--;
            }

            if (sum > 0) {
                r--;
                continue;
            }
            if (sum < 0) {
                l++;
            }
        }
    }
    return res;
};


let a = threeSum([-1, 0, 1, 2, -1, -4])
// let a = threeSum([-1, 0, 1])
console.log(a);
