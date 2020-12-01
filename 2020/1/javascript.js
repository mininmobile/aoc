let data = require("fs").readFileSync("input.txt", "utf8");
let numbers = data.split("\n").map(x => parseInt(x)).filter(x => !isNaN(x));

function partOne() {
	for (let a of numbers)
		for (let b of numbers)
			if (a + b == 2020) {
				console.log(a * b);
				return;
			}
}

function partTwo() {
	for (let a of numbers)
		for (let b of numbers)
			for (let c of numbers)
				if (a + b + c == 2020) {
					console.log(a * b * c);
					return;
				}
}

partOne();
partTwo();
