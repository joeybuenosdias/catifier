export const catifyAlgorithim = (paragraph) => {
	let words = paragraph.toLowerCase().split(' ');
	let catify = words.map((word) => {
		let checkedWord = wordCatifierAlgorithim(word);
		switch (checkedWord) {
			case 'get':
			case 'got':
			case 'caught':
			case 'cut':
				return checkedWord.replace(checkedWord, 'cat');
			case 'pause':
				return checkedWord.replace(checkedWord, 'paws');
			case 'feeling':
			case 'feelings':
				return checkedWord.replace(checkedWord, 'feline');
			case 'clause':
			case 'cause':
				return checkedWord.replace(checkedWord, 'claws');
			case 'kitchen':
			case 'kidding':
				return checkedWord.replace(checkedWord, 'kitten');
			case 'me':
			case 'now':
				return checkedWord.replace(checkedWord, 'meow');
			default:
				return checkedWord;
		}
	});
	return catify.join(' ');
};

const wordCatifierAlgorithim = (word) => {
	let catPortion = word.search('cat');
	let purrPortion = word.search('per');
	let letters = word.split('');
	if (catPortion >= 0) {
		let catWord = letters.splice(catPortion, 3, 'kitty-cat');
		return letters.join('');
	} else if (purrPortion >= 0) {
		let purrWord = letters.splice(purrPortion, 3, 'purrrr');
		return letters.join('');
	} else {
		return word;
	}
};
