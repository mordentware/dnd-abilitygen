/**
 * TODO: documentation
 *
 * @param {string} diceString Formatted dice string. Valid formats are: "#", "d#" "#d#", "#d#+#", "#d#-#", "d#+#", "d#-#"
 * @return {int} Result of dice roll.
 */
var rollDice = function(diceString) {
	var numDice = diceString.match(/^([^d]+)/);
	if (numDice === null || numDice.length < 2) {
		numDice = '1';
	}
	else {
		numDice = numDice[1];
	}
	numDice = parseInt(numDice);
	var diceSides = diceString.match(/^[^d]*d([0-9]+)/);
	if (diceSides === null || diceSides.length < 2) {
		diceSides = '1';
	}
	else {
		diceSides = diceSides[1];
	}
	diceSides = parseInt(diceSides);
	var modifier = diceString.match(/^[^d]*d[0-9]+(.+)/);
	if (modifier === null || modifier.length < 2) {
		modifier = '0';
	}
	else {
		modifier = modifier[1];
	}
	modifier = parseInt(modifier);
	// roll dice
	var total = 0;
	for (var die = 0; die < numDice; die++) {
		total += Math.ceil(diceSides*Math.random());
	}
	total += modifier;
	return total;
};

/*
 * DATA
 */

var characterClasses = {
	'Barbarian': {
		ageBracket: 0
	},
	'Bard': {
		ageBracket: 1
	},
	'Cleric': {
		ageBracket: 2
	},
	'Druid': {
		ageBracket: 2
	},
	'Fighter': {
		abilityTrees: [
			{
				'STR': 0,
				'DEX': 1,
				'CON': 1,
				'INT': 2,
				'WIS': 2,
				'CHA': 2
			}
		],
		ageBracket: 1
	},
	'Monk': {
		ageBracket: 2
	},
	'Paladin': {
		ageBracket: 1
	},
	'Ranger': {
		ageBracket: 1
	},
	'Rogue': {
		ageBracket: 0
	},
	'Sorcerer': {
		ageBracket: 0
	},
	'Wizard': {
		ageBracket: 2
	}
};

var characterRaces = {
	'Human': {
		abilityModifiers: {
			'STR': 0,
			'DEX': 0,
			'CON': 0,
			'INT': 0,
			'WIS': 0,
			'CHA': 0
		},
		ageBase: 15,
		ageBrackets: ['1d4', '1d6', '2d6'],
		heightBase: {
			'Male': 58,
			'Female': 53
		},
		heightModifier: {
			'Male': '2d10',
			'Female': '2d10'
		},
		weightBase: {
			'Male': 120,
			'Female': 85
		},
		weightMultiplier: {
			'Male': '2d4',
			'Female': '2d4'
		}
	}
};

var generationMethods = {
	'3d6': function() {
		var abilities = [];
		for (var ability = 0; ability < 6; ability++) {
			abilities[ability] = rollDice('3d6');
		}
		return abilities.sort(function(a,b){return b-a;});
	},
	'4d6, best 3': function() {
		var abilities = []
		for (var ability = 0; ability < 6; ability++) {
			var rolls = [];
			for (var roll = 0; roll < 4; roll++) {
				rolls[roll] = rollDice('1d6');
			}
			abilities[ability] = rolls.sort(function(a,b) {
				return b-a;
			}).slice(0, 3).reduce(function(pv, cv) {
				return pv + cv;
			}, 0);;
		}
		return abilities.sort(function(a,b){return b-a;});
	},
	'Elite array': function() {
		return [15, 14, 13, 12, 10, 8];
	},
	'Non-elite array': function() {
		return [13, 12, 11, 10, 9, 8];
	}
};

/**
 * Sets up the initial app environment.
 */
window.onload = function() {
	var optionIndex = 0;
	// add classes
	var $characterClassElement = $('#char-class');
	optionIndex = 0;
	for (var characterClass in characterClasses) {
		// create and append new option element
		$characterClassElement.append($('<option>', {
			selected: optionIndex === 0,
			text: characterClass,
			value: characterClass
		}));
		optionIndex++;
	}
	// add races
	var $characterRaceElement = $('#char-race');
	optionIndex = 0;
	for (var characterRace in characterRaces) {
		// create and append new option element
		$characterRaceElement.append($('<option>', {
			selected: optionIndex === 0,
			text: characterRace,
			value: characterRace
		}));
		optionIndex++;
	}
	// add generation methods
	var $generationMethodElement = $('#generation-method');
	optionIndex = 0;
	for (var generationMethod in generationMethods) {
		// create and append new option element
		$generationMethodElement.append($('<option>', {
			selected: optionIndex === 0,
			text: generationMethod,
			value: generationMethod
		}));
		optionIndex++;
	}
	// add callback to generate button
	$('#generate').click(function() {
		// get all settings
		var currClass = characterClasses[$('#char-class').find(':selected').val()];
		var currRace = characterRaces[$('#char-race').find(':selected').val()];
		var currGender = $('#char-gender').find(':selected').val();
		var currGenerationMethod = generationMethods[$('#generation-method').find(':selected').val()];
		// generate raw abilities
		var abilityRolls = currGenerationMethod();
		// select ability tree
		var abilityTree = currClass.abilityTrees[Math.floor((currClass.abilityTrees.length)*Math.random())];
		// assign abilities
		var currAbilities = {
			'STR': {
				'base': 10,
				'racial': 0,
				'total': 10
			},
			'DEX': {
				'base': 10,
				'racial': 0,
				'total': 10
			},
			'CON': {
				'base': 10,
				'racial': 0,
				'total': 10
			},
			'INT': {
				'base': 10,
				'racial': 0,
				'total': 10
			},
			'WIS': {
				'base': 10,
				'racial': 0,
				'total': 10
			},
			'CHA': {
				'base': 10,
				'racial': 0,
				'total': 10
			}
		}
		var numPriorities = Math.max(abilityTree['STR'], abilityTree['DEX'], abilityTree['CON'], abilityTree['INT'], abilityTree['WIS'], abilityTree['CHA'])+1;
		var abilitiesAssigned = 0;
		for (var priority = 0; priority < numPriorities; priority++) {
			// find all abilities with given priority
			var unshuffledAbilities = [];
			for (var ability in abilityTree) {
				if (abilityTree[ability] === priority) {
					unshuffledAbilities.push(ability);
				}
			}
			// randomise array
			var shuffledAbilities = [];
			var numPasses = unshuffledAbilities.length;
			for (var pass = 0; pass < numPasses; pass++) {
				var shuffleIndex = Math.floor(unshuffledAbilities.length * Math.random());
				shuffledAbilities[pass] = unshuffledAbilities[shuffleIndex];
				unshuffledAbilities.splice(shuffleIndex, 1);
			}
			// assign abilities
			for (var abilityIndex = 0; abilityIndex < shuffledAbilities.length; abilityIndex++) {
				currAbilities[shuffledAbilities[abilityIndex]].base = abilityRolls[abilitiesAssigned];
				abilitiesAssigned++;
			}
		}
		// apply racial modifiers
		for (var ability in currAbilities) {
			currAbilities[ability].racial = currRace.abilityModifiers[ability];
		}
		// calculate ability totals
		for (var ability in currAbilities) {
			currAbilities[ability].total = currAbilities[ability].base + currAbilities[ability].racial;
		}
		// render abilities
		for (var ability in currAbilities) {
			var abilityElementIdPrefix = 'gen-abilities-' + ability.toLowerCase();
			for (var component in currAbilities[ability]) {
				$('#' + abilityElementIdPrefix + '-' + component).text(currAbilities[ability][component]);
			}
		}
		// generate height
		var heightModifier = rollDice(currRace.heightModifier[currGender]);
		var currHeight = currRace.heightBase[currGender] + heightModifier;
		// generate weight
		var weightModifier = rollDice(currRace.weightMultiplier[currGender]) * heightModifier;
		var currWeight = currRace.weightBase[currGender] + weightModifier;
		// generate age
		var ageModifier = rollDice(currRace.ageBrackets[currClass.ageBracket]);
		var currAge = currRace.ageBase + ageModifier;
		// render height/weight/age
		var parsedHeight = Math.floor(currHeight/12) + '\' ' + (currHeight % 12) + '"';
		var parsedWeight = currWeight + ' lb.';
		$('#gen-height').text(parsedHeight);
		$('#gen-weight').text(parsedWeight);
		$('#gen-age').text(currAge);
	});
};