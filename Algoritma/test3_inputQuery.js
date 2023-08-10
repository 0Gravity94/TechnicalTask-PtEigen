function countQuery(input, query) {
	const output = [];

	for (let i = 0; i < query.length; i++) {
		const queryWord = query[i];
		let count = 0;

		for (let j = 0; j < input.length; j++) {
			const inputWord = input[j];

			if (queryWord === inputWord) {
				count++;
			}
		}

		output.push(count);
	}

	return output;
}

//contoh penggunaan
let inputArray = ["xc", "dz", "bbb", "dz"];
let queryArray = ["bbb", "ac", "dz"];
let result = countQuery(inputArray, queryArray);
console.log(result);
