let data = require("fs").readFileSync("input.txt", "utf8");
let rawPasswords = data.split("\n").map(x => x.split(/(: |-| )/g).filter(x => ![": ", " ", "-"].includes(x))).filter(x => x.length == 4);
let goodPasswords;

// part 1
goodPasswords = [];
for (let pw of rawPasswords) {
	let c = count(pw[3], pw[2]);
	if (c >= parseInt(pw[0]) && c <= parseInt(pw[1]))
		goodPasswords.push(pw[3]);
}

console.log("part 1:", goodPasswords.length);

function count(string, char) {
	let count = 0;

	for (let c of string)
		if (c == char)
			count++;

	return count;
}

// part 2
goodPasswords = [];
for (let pw of rawPasswords) {
	let a = pw[3].charAt(parseInt(pw[0]) - 1) == pw[2];
	let b = pw[3].charAt(parseInt(pw[1]) - 1) == pw[2];
	if (a != b)
		goodPasswords.push(pw[3]);
}

console.log("part 2:", goodPasswords.length);
