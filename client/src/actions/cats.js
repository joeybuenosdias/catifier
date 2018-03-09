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
				return checkedWord.replace(checkedWord, 'feline');
			case 'clause':
			case 'cause':
				return checkedWord.replace(checkedWord, 'claws');
			case 'kitchen':
			case 'kidding':
				return checkedWord.replace(checkedWord, 'kitten');
			default:
				return checkedWord;
		}
	});
	return catify.join(' ');
};

const wordCatifierAlgorithim = (word) => {
	let letters = word.split('');
	let enterCatPuns = letters.map((letter) => {
		switch (letter) {
			case 'c':
				return letter.replace(letter, 'kitty c');
			default:
				return letter;
		}
	});
	return enterCatPuns.join('');
};
