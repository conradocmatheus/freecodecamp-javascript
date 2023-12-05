function checkCashRegister(price, cash, cid) {
	const currency = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1,
		FIVE: 5,
		TEN: 10,
		TWENTY: 20,
		"ONE HUNDRED": 100,
	};

	let change = cash - price;
	let total = cid.reduce((sum, curr) => sum + curr[1], 0);
	let changeArr = [];

	for (let i = cid.length - 1; i >= 0; i--) {
		let curr = cid[i][0];
		let currTotal = cid[i][1];
		let currVal = currency[curr];
		let currAmount = Math.round(currTotal / currVal);
		let currChange = 0;

		while (change >= currVal && currAmount > 0) {
			change -= currVal;
			change = Math.round(change * 100) / 100;
			currTotal -= currVal;
			currAmount--;
			currChange += currVal;
		}

		if (currChange > 0) {
			changeArr.push([curr, currChange]);
		}
	}

	if (change > 0) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	} else if (total === cash - price) {
		return { status: "CLOSED", change: cid };
	} else {
		return { status: "OPEN", change: changeArr };
	}
}
