function reverseAlphabet(str) {
	const regex = /([a-zA-Z]+)(\d+)/;
	const matches = str.match(regex);

	if (matches) {
		const characters = matches[1].split("").reverse().join("");
		return characters + matches[2];
	} else {
		return str.split("").reverse().join("");
	}
}

//contoh penggunaan
let input = "NEGIE1";
let hasil = reverseAlphabet(input);
console.log(hasil);
