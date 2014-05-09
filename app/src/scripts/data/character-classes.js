define([
	'character-class',
	'character-class-variant'
], function(CharacterClass, CharacterClassVariant) {

	/**
	 * TODO: documentation
	 */
	var characterClasses = {
		'barbarian': new CharacterClass('Barbarian', 'simple', {
			'rage': new CharacterClassVariant('Rage', {
				'str': 0,
				'dex': 0,
				'con': 0,
				'int': 0,
				'wis': 0,
				'cha': 0
			})
		}),
		'bard': new CharacterClass('Bard', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 0,
				'dex': 0,
				'con': 0,
				'int': 0,
				'wis': 0,
				'cha': 0
			})
		})
	};

	// expose functionality
	return characterClasses;

});