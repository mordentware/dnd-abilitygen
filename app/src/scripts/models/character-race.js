define(function() {

	/**
	 * TODO: documentation
	 */
	var CharacterRace = function(name, abilityModifiers, physicalParameters, ageBrackets, ageRanges) {
		this.name = name;
		this.abilityModifiers = abilityModifiers;
		this.physicalParameters = physicalParameters;
		this.ageBrackets = ageBrackets;
		this.ageRanges = ageRanges;
	};

	// expose functionality
	return CharacterRace;

});