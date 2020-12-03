let data = require("fs").readFileSync("input.txt", "utf8");
let map = data.split("\n");
let w = map[0].length;


// p1
console.log("part 1:", ride(3, 1));

// p2
let trees = [
	[1, 1],
	[3, 1],
	[5, 1],
	[7, 1],
	[1, 2],
].map(x => ride.apply(this, x));
let total = trees.reduce((a, b) => a * b);

console.log("part 2:", trees, total);

// util
function ride(right, down) {
	let trees = 0;

	for (let i = 0; i < map.length; i += down) {
		if (map[i].length < w)
			continue;

		if (map[i][(i * right) % w] == "#")
			trees++;
	}

	return trees;
}
