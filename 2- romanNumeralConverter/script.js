function convertToRoman(num) {
	var romanNumeral = "";
	var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romanNumeralValue = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];

	for (var i = 0; i < decimalValue.length; i++) {
		while (decimalValue[i] <= num) {
			romanNumeral += romanNumeralValue[i];
			num -= decimalValue[i];
		}
	}
	return romanNumeral;
}

convertToRoman(36);
