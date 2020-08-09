;(function(name, root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory();
		module.exports['default'] = factory();
	} else if (typeof define === 'function' && define.amd) {
		define(factory);
	} else {
		root[name] = factory();
	}
})('keymachine', this, function() {
	function keymachine(_configuration) {
		const configuration = _configuration || {}
		const possibility = ('possibility' in configuration) ? configuration.possibility : 'abcdefghijklmnopqrstuvwxyz0123456789';
		const length = ('length' in configuration) ? configuration.length : 24;
		const letterCase = ('case' in configuration) ? configuration.case : 'mixed';

		let result = '';

		for (let x = 0; x < length; x++) {
			if (letterCase === 'lower') {
				result += possibility.toLowerCase().charAt(Math.floor(Math.random() * possibility.length));
			} else if (letterCase === 'upper') {
				result += possibility.toUpperCase().charAt(Math.floor(Math.random() * possibility.length));
			} else {
				let chance = Math.random() < 0.5;
				result +=
					chance === true
						? possibility.toLowerCase().charAt(Math.floor(Math.random() * possibility.length))
						: possibility.toUpperCase().charAt(Math.floor(Math.random() * possibility.length));
			}
		}

		return result;
	}

	return keymachine;
});