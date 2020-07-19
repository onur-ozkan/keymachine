export const keymachine = (configuration) => {
	const possibility = configuration?.possibility || 'abcdefghijklmnopqrstuvwxyz0123456789'
	const length = configuration?.length || 24
	const letterCase = configuration?.case || 'mixed'

	let result = ''

	for (let x = 0; x < length; x++) {
		if (letterCase === 'lower') {
			result += possibility.toLowerCase().charAt(Math.floor(Math.random() * possibility.length))
		}

		else if (letterCase === 'upper') {
			result += possibility.toUpperCase().charAt(Math.floor(Math.random() * possibility.length))
		}

		else {
			let chance = Math.random() < 0.5
			result += (chance === true) ?
				possibility.toLowerCase().charAt(Math.floor(Math.random() * possibility.length))
				: possibility.toUpperCase().charAt(Math.floor(Math.random() * possibility.length))
		}
	}

	return result
}