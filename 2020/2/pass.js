const { parse } = require("path");

let data = require("fs").readFileSync("input.txt", "utf8");
let rawPasswords = data.split("\n").map(x => x.split(/(: |-| )/g).filter(x => ![": ", " ", "-"].includes(x))).filter(x => x.length == 4);
let goodPasswords = [];

for (let pw of rawPasswords) {
	let c = count(pw[3], pw[2]);
	if (c >= parseInt(pw[0]) && c <= parseInt(pw[1]))
		goodPasswords.push(pw[3]);
}

console.log(goodPasswords.length);

function count(string, char) {
	let count = 0;

	for (let c of string)
		if (c == char)
			count++;

	return count;
}
