let data = require("fs").readFileSync("input.txt", "utf8");
let map = data.split("\n");
let w = map[0].length;

// p1
console.log("part 1:", ride(3, 1));

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
