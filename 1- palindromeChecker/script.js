function palindrome(str) {
	let regex = /[^a-z0-9]/gi;
	let newStr = str.replace(regex, "").toLowerCase();
	let reversedStr = newStr.split("").reverse().join("");
	return newStr === reversedStr;
}

palindrome("eye");
