var isPalindrome = function (x) {
	if (x<0) return false
	let a = x;

	let t = 0;
	while (a > 0) {
		let temp = a % 10;
		t = (t * 10) + temp;
		a = Math.floor(a / 10)
	}
	return x === t ? true : false

};

console.log(isPalindrome(120));
