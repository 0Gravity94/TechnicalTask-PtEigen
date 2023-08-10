function longest(sentence) {
	const words = sentence.split(" ");

	let longestWord = "";

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		const cleanFromPunctuation = word.replace(/[^a-zA-Z]/g, "");

		if (cleanFromPunctuation.length > longestWord.length) {
			longestWord = cleanFromPunctuation;
		}
	}

	return `${longestWord} : ${longestWord.length} characters`;
}

//contoh penggunaan
let sentence = "Saya sangat senang mengerjakan soal algoritma";
let result = longest(sentence);
console.log(result);
