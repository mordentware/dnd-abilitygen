define([
	'character-gender'
], function(CharacterGender) {

	/**
	 * TODO: documentation
	 */
	var characterGenders = {
		'male': new CharacterGender('Male'),
		'female': new CharacterGender('Female')
	};

	// expose functionality
	return characterGenders;

});