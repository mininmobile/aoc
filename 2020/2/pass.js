let data = require("fs").readFileSync("input.txt", "utf8");
let rawPasswords = data.split("\n").map(x => x.split(/(: |-| )/g).filter(x => ![": ", " ", "-"].includes(x))).filter(x => x.length == 4);
let goodPasswords;

// function parse(data) {
// 	let parsed = [];
// 	let temp = {
// 		// 0 => from
// 		// 1 => to
// 		// 2 => char
// 		// 3 => pass
// 		mode: 0,

// 		from: "",
// 		to: "",
// 		char: "",
// 		pass: "",
// 	}

// 	for (let i in data) {
// 		let c = data[i];

// 		if (temp.mode == 0) {
// 			if (c == "-")
// 				temp.mode = 1;
// 			else
// 				temp.from += c;
// 		} else if (temp.mode == 1) {
// 			if (c == " ")
// 				temp.mode = 2;
// 			else
// 				temp.to += c;
// 		} else if (temp.mode == 2) {
// 			if (c == ":")
// 				temp.mode = 3;
// 			else
// 				temp.char += c;
// 		} else if (temp.mode == 3) {
// 			if (data[i - 1] == ":" && c == " ") {
// 				// nothing
// 			} else if (c == "\n") {
// 				parsed.push([temp.from, temp.to, temp.char, temp.pass]);
// 				temp = {
// 					mode: 0,
// 					from: "",
// 					to: "",
// 					char: "",
// 					pass: "",
// 				}
// 			} else {
// 				temp.pass += c;
// 			}
// 		}
// 	}

// 	return parsed;
// }

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
