define([
	'character-race'
], function(CharacterRace) {

	/**
	 * TODO: documentation
	 */
	var characterRaces = {
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
			'adult': 15,
			'middleaged': 35,
			'old': 53,
			'venerable': 70,
			'maximum': '2d20'
		}),
		'dwarf': new CharacterRace('Dwarf', {
			'str': 0,
			'dex': 0,
			'con': 2,
			'int': 0,
			'wis': 0,
			'cha': -2
		}, {
			'male': {
				'heightBase': 45,
				'heightModifier': '2d4',
				'weightBase': 130,
				'weightMultiplier': '2d6'
			},
			'female': {
				'heightBase': 43,
				'heightModifier': '2d4',
				'weightBase': 100,
				'weightModifier': '2d6'
			}
		}, {
			'simple': '3d6',
			'moderate': '5d6',
			'complex': '7d6'
		}, {
			'adult': 40,
			'middleaged': 125,
			'old': 188,
			'venerable': 250,
			'maximum': '2d100'
		}),
		'elf': new CharacterRace('Elf', {
			'str': 0,
			'dex': 2,
			'con': -2,
			'int': 0,
			'wis': 0,
			'cha': 0
		}, {
			'male': {
				'heightBase': 53,
				'heightModifier': '2d6',
				'weightBase': 85,
				'weightMultiplier': '1d6'
			},
			'female': {
				'heightBase': 53,
				'heightModifier': '2d6',
				'weightBase': 80,
				'weightMultiplier': '1d6'
			}
		}, {
			'simple': '4d6',
			'moderate': '6d6',
			'complex': '10d6'
		}, {
			'adult': 110,
			'middleaged': 175,
			'old': 263,
			'venerable': 350,
			'maximum': '4d100'
		}),
		'gnome': new CharacterRace('Gnome', {
			'str': -2,
			'dex': 0,
			'con': 2,
			'int': 0,
			'wis': 0,
			'cha': 0
		}, {
			'male': {
				'heightBase': 36,
				'heightModifier': '2d4',
				'weightBase': 40,
				'weightMultiplier': '1d1'
			},
			'female': {
				'heightBase': 34,
				'heightModifier': '2d4',
				'weightBase': 35,
				'weightMultiplier': '1d4'
			}
		}, {
			'simple': '4d6',
			'moderate': '6d6',
			'complex': '9d6'
		}, {
			'adult': 40,
			'middleaged': 100,
			'old': 150,
			'venerable': 200,
			'maximum': '3d100'
		}),
		'halfling': new CharacterRace('Halfling', {
			'str': -2,
			'dex': 2,
			'con': 0,
			'int': 0,
			'wis': 0,
			'cha': 0
		}, {
			'male': {
				'heightBase': 32,
				'heightModifier': '2d4',
				'weightBase': 30,
				'weightMultiplier': '1d1'
			},
			'female': {
				'heightBase': 30,
				'heightModifier': '2d4',
				'weightBase': 25,
				'weightMultiplier': '1d1'
			}
		}, {
			'simple': '2d4',
			'moderate': '3d6',
			'complex': '4d6'
		}, {
			'adult': 20,
			'middleaged': 50,
			'old': 75,
			'venerable': 100,
			'maximum': '5d20'
		}),
		'halfelf': new CharacterRace('Half-elf', {
			'str': 0,
			'dex': 0,
			'con': 0,
			'int': 0,
			'wis': 0,
			'cha': 0
		}, {
			'male': {
				'heightBase': 55,
				'heightModifier': '2d8',
				'weightBase': 100,
				'weightMultiplier': '2d4'
			},
			'female': {
				'heightBase': 53,
				'heightModifier': '2d8',
				'weightBase': 80,
				'weightMultiplier': '2d4'
			}
		}, {
			'simple': '1d6',
			'moderate': '2d6',
			'complex': '3d6'
		}, {
			'adult': 20,
			'middleaged': 62,
			'old': 93,
			'venerable': 125,
			'maximum': '3d20'
		}),
		'halforc': new CharacterRace('Half-orc', {
			'str': 2,
			'dex': 0,
			'con': 0,
			'int': -2,
			'wis': 0,
			'cha': -2
		}, {
			'male': {
				'heightBase': 58,
				'heightModifier': '2d12',
				'weightBase': 150,
				'weightMultiplier': '2d6'
			},
			'female': {
				'heightBase': 53,
				'heightModifier': '2d12',
				'weightBase': 110,
				'weightMultiplier': '2d6'
			}
		}, {
			'simple': '1d4',
			'moderate': '1d6',
			'complex': '2d6'
		}, {
			'adult': 14,
			'middleaged': 30,
			'old': 45,
			'venerable': 60,
			'maximum': '2d10'
		})
	};

	// expose functionality
	return characterRaces;

});