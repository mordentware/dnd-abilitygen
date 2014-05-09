define([
	'character-age-range'
], function(CharacterAgeRange) {

	/**
	 * TODO: documentation
	 */
	var characterAgeRanges = {
		'starting': new CharacterAgeRange('Starting', {
			'str': 0,
			'dex': 0,
			'con': 0,
			'int': 0,
			'wis': 0,
			'cha': 0
		}),
		'adult': new CharacterAgeRange('Adult', {
			'str': 0,
			'dex': 0,
			'con': 0,
			'int': 0,
			'wis': 0,
			'cha': 0
		}),
		'middleaged': new CharacterAgeRange('Middle-aged', {
			'str': -1,
			'dex': -1,
			'con': -1,
			'int': 1,
			'wis': 1,
			'cha': 1
		}),
		'old': new CharacterAgeRange('Old', {
			'str': -3,
			'dex': -3,
			'con': -3,
			'int': 2,
			'wis': 2,
			'cha': 2
		}),
		'venerable': new CharacterAgeRange('Venerable', {
			'str': -6,
			'dex': -6,
			'con': -6,
			'int': 3,
			'wis': 3,
			'cha': 3
		})
	};

	// expose functionality
	return characterAgeRanges;

});