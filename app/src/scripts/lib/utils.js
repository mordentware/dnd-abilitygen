define([
	'jquery'
], function($) {

	/**
	 * @param {object} dropdownObject Object containing key => value pairs, where value is any object which has a "name" property.
	 * @param {string} [dropdownId] ID attribute for the resultant dropdown.
	 * @param {string} [label] Label text.
	 * @return {jQuery} jQuery object containing created element(s).
	 */
	var createDropdown = function(dropdownObject, dropdownId, label) {
		var $elements;
		// add select element
		var $select = $('<select />', {
			id: dropdownId
		});
		$select.append(createOptions(dropdownObject));
		// add label element
		if (label) {
			var $label = $('<label />', {
				for: dropdownId,
				text: label
			});
			$elements = $label.add($select);
		}
		else {
			$elements = $select;
		}
		return $elements;
	};

	/**
	 * @param {object} optionsObject Object containing key => value pairs, where value is any object which has a "name" property.
	 * @return {jQuery} jQuery object containing created option(s).
	 */
	var createOptions = function(optionsObject) {
		var $elements = $();
		for (var element in optionsObject) {
			$elements = $elements.add($('<option />', {
				text: optionsObject[element].name,
				val: element
			}));
		}
		return $elements;
	}

	/**
	 * Rolls dice according to the dice string given, returning the result.
	 * Valid dice strings are:
	 *   'dS'    - shorthand of '1dS+0'
	 *   'dS+M'  - shorthand of '1dS+M'
	 *   'dS-M'  - shorthand of '1dS-M'
	 *   'NdS'   - shorthand of 'NdS+0'
	 *   'NdS+M' - rolls N S-sided dice, totalling them, then adds M; N must be non-negative, S must be non-negative, M must be positive
	 *   'NdS-M' - rolls N S-sided dice, totalling them, then subtracts M; N must be non-negative, S must be non-negative, M must be positive
	 *
	 * @param {string} diceString Formatted dice string. Entering an invalid dice string may cause unexpected results.
	 * @return {int} Result of dice roll.
	 */
	var roll = function(diceString) {
		var diceNum = 1;
		var diceSides = 0;
		var diceModifier = 0;
		// parse dice string
		var parsedDiceString = /^([0-9]+)?d([0-9]+)([+-][0-9]+)?/.exec(diceString);
		if (parsedDiceString !== null) {
			diceNum = parsedDiceString[1] || diceNum;
			diceSides = parsedDiceString[2] || diceSides;
			diceModifier = parseInt(parsedDiceString[3] || diceModifier);
		}
		// roll dice
		var total = 0;
		for (var die = 0; die < diceNum; die++) {
			total += Math.ceil(diceSides * Math.random());
		}
		total += diceModifier;
		return total;
	};

	/**
	 * Shuffles an array; note that this edits the original array.
	 *
	 * @param {Array} array Array to shuffle.
	 * @return {Array} Shuffled array.
	 */
	var shuffleArray = function(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};
	
	function shuffleArray(array) {
}

	// expose functionality
	return {
		createDropdown: createDropdown,
		createOptions: createOptions,
		roll: roll,
		shuffleArray: shuffleArray
	};

});