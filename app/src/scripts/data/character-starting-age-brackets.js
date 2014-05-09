define([
	'character-starting-age-bracket'
], function(CharacterStartingAgeBracket) {

	/**
	 * TODO: documentation
	 */
	var characterStartingAgeBrackets = {
		'simple': new CharacterStartingAgeBracket('Simple'),
		'moderate': new CharacterStartingAgeBracket('Moderate'),
		'complex': new CharacterStartingAgeBracket('Complex')
	};

	// expose functionality
	return characterStartingAgeBrackets;

});