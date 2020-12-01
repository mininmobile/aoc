let data = require("fs").readFileSync("input.txt", "utf8");
let numbers = data.split("\n").map(x => parseInt(x)).filter(x => !isNaN(x));

let result;

for (let a of numbers)
	for (let b of numbers)
		for (let c of numbers)
			if (a + b + c == 2020)
				result = a * b * c;

console.log(result || "unable to solve!");
