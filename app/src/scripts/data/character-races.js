define([
	'character-race'
], function(CharacterRace) {

	/**
	 * TODO: documentation
	 */
	var characterRaces = {
		'elf': new CharacterRace('Elf', {
			'str': 0,
			'dex': 2,
			'con': -2,
			'int': 0,
			'wis': 0,
			'cha': 0
		}, {
			// TODO: update
			'male': {
				'heightBase': 50,
				'heightModifier': '1d10',
				'weightBase': 100,
				'weightMultiplier': '1d10'
			},
			'female': {
				'heightBase': 50,
				'heightModifier': '1d10',
				'weightBase': 100,
				'weightMultiplier': '1d10'
			}
		}, {
			// TODO: update
			'simple': '1d10',
			'moderate': '2d10',
			'complex': '3d10'
		}, {
			// TODO: update
			'adult': 100,
			'middleaged': 200,
			'old': 300,
			'venerable': 400,
			'maximum': '1d100'
		}),
		'human': new CharacterRace('Human', {
			'str': 0,
			'dex': 0,
			'con': 0,
			'int': 0,
			'wis': 0,
			'cha': 0
		}, {
			'male': {
				'heightBase': 58,
				'heightModifier': '2d10',
				'weightBase': 120,
				'weightMultiplier': '2d4'
			},
			'female': {
				'heightBase': 53,
				'heightModifier': '2d10',
				'weightBase': 85,
				'weightModifier': '2d4'
			}
		}, {
			'simple': '1d4',
			'moderate': '1d6',
			'complex': '2d6'
		}, {
			// TODO: update
			'adult': 15,
			'middleaged': 30,
			'old': 50,
			'venerable': 70,
			'maximum': '1d20'
		})
	};

	// expose functionality
	return characterRaces;

});