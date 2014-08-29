define([
	'character-class',
	'character-class-variant'
], function(CharacterClass, CharacterClassVariant) {

	/**
	 * TODO: documentation
	 */
	var characterClasses = {
		'barbarian': new CharacterClass('Barbarian', 'simple', {
			'rage': new CharacterClassVariant('Standard', {
				'str': 0,
				'dex': 0,
				'con': 1,
				'int': 2,
				'wis': 2,
				'cha': 2
			})
		}),
		'bard': new CharacterClass('Bard', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 0,
				'con': 2,
				'int': 0,
				'wis': 1,
				'cha': 1
			})
		}),
		'cleric': new CharacterClass('Cleric', 'complex', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 1,
				'dex': 2,
				'con': 2,
				'int': 2,
				'wis': 0,
				'cha': 1
			}),
			'mighty': new CharacterClassVariant('Mighty', {
				'str': 0,
				'dex': 2,
				'con': 1,
				'int': 2,
				'wis': 0,
				'cha': 1
			}),
			'nimble': new CharacterClassVariant('Nimble', {
				'str': 2,
				'dex': 0,
				'con': 1,
				'int': 2,
				'wis': 0,
				'cha': 1
			})
		}),
		'druid': new CharacterClass('Druid', 'complex', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 1,
				'con': 2,
				'int': 2,
				'wis': 0,
				'cha': 1
			})
		}),
		'fighter': new CharacterClass('Fighter', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 0,
				'dex': 1,
				'con': 1,
				'int': 2,
				'wis': 2,
				'cha': 3
			}),
			'durable': new CharacterClassVariant('Durable', {
				'str': 0,
				'dex': 2,
				'con': 1,
				'int': 3,
				'wis': 2,
				'cha': 3
			}),
			'nimble': new CharacterClassVariant('Nimble', {
				'str': 1,
				'dex': 0,
				'con': 1,
				'int': 2,
				'wis': 3,
				'cha': 3
			}),
		}),
		'monk': new CharacterClass('Monk', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 1,
				'con': 1,
				'int': 2,
				'wis': 0,
				'cha': 2
			})
		}),
		'paladin': new CharacterClass('Paladin', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 1,
				'dex': 0,
				'con': 1,
				'int': 2,
				'wis': 3,
				'cha': 3
			})
		}),
		'ranger': new CharacterClass('Ranger', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 1,
				'dex': 0,
				'con': 1,
				'int': 3,
				'wis': 2,
				'cha': 3
			}),
			'cunning': new CharacterClassVariant('Cunning', {
				'str': 1,
				'dex': 0,
				'con': 1,
				'int': 0,
				'wis': 2,
				'cha': 2
			})
		}),
		'rogue': new CharacterClass('Rogue', 'simple', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 0,
				'con': 1,
				'int': 1,
				'wis': 2,
				'cha': 2
			})
		}),
		'sorcerer': new CharacterClass('Sorcerer', 'simple', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 3,
				'dex': 1,
				'con': 2,
				'int': 0,
				'wis': 2,
				'cha': 1
			})
		}),
		'wizard': new CharacterClass('Wizard', 'complex', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 1,
				'con': 2,
				'int': 0,
				'wis': 1,
				'cha': 2
			})
		}),
		'adept': new CharacterClass('Adept', 'complex', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 2,
				'con': 2,
				'int': 1,
				'wis': 0,
				'cha': 1
			})
		}),
		'aristocrat': new CharacterClass('Aristocrat', 'complex', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 0,
				'dex': 1,
				'con': 1,
				'int': 0,
				'wis': 1,
				'cha': 0
			})
		}),
		'commoner': new CharacterClass('Commoner', 'simple', {
			'manual': new CharacterClassVariant('Manual', {
				'str': 0,
				'dex': 1,
				'con': 0,
				'int': 2,
				'wis': 2,
				'cha': 2
			}),
			'administrative': new CharacterClassVariant('Administrative', {
				'str': 1,
				'dex': 1,
				'con': 1,
				'int': 0,
				'wis': 0,
				'cha': 0
			})
		}),
		'expert': new CharacterClass('Expert', 'moderate', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 2,
				'dex': 1,
				'con': 2,
				'int': 0,
				'wis': 1,
				'cha': 0
			})
		}),
		'warrior': new CharacterClass('Warrior', 'simple', {
			'standard': new CharacterClassVariant('Standard', {
				'str': 0,
				'dex': 1,
				'con': 1,
				'int': 2,
				'wis': 2,
				'cha': 3
			}),
			'durable': new CharacterClassVariant('Durable', {
				'str': 0,
				'dex': 2,
				'con': 1,
				'int': 3,
				'wis': 2,
				'cha': 3
			}),
			'nimble': new CharacterClassVariant('Nimble', {
				'str': 1,
				'dex': 0,
				'con': 1,
				'int': 2,
				'wis': 3,
				'cha': 3
			})
		})
	};

	// expose functionality
	return characterClasses;

});