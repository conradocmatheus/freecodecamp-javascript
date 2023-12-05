function rot13(str) {
	let regex = /[A-Z]/;
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		if (regex.test(str[i])) {
			let charCode = str.charCodeAt(i);
			let newCharCode = charCode + 13;
			if (newCharCode > 90) {
				newCharCode = newCharCode - 26;
			}
			newStr += String.fromCharCode(newCharCode);
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

rot13("SERR PBQR PNZC");
