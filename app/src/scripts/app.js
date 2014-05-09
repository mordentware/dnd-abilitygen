define([
	'jquery',
	'character-ability',
	'character-age-ranges',
	'character-classes',
	'character-genders',
	'character-races',
	'generation-methods',
	'utils'
], function(
	$,
	CharacterAbility,
	characterAgeRanges,
	characterClasses,
	characterGenders,
	characterRaces,
	generationMethods,
	utils
) {

	var generate = function() {
		// get all settings
		var selectedGenderKey = $('#generation-gender').find('option:selected').val();
		var selectedAgeRangeKey = $('#generation-age-range').find('option:selected').val();
		var selectedRaceKey = $('#generation-race').find('option:selected').val();
		var selectedClassKey = $('#generation-class').find('option:selected').val();
		var selectedClassVariantKey = $('#generation-class-variant').find('option:selected').val();
		var randomiseClassVariant = $('#generation-class-variant-randomise').prop('checked');
		var selectedGenerationMethodKey = $('#generation-method').find('option:selected').val();
		var selectedRace = characterRaces[selectedRaceKey];
		var selectedClass = characterClasses[selectedClassKey];
		// establish class variant
		var generatedClassVariantKey;
		if (randomiseClassVariant) {
			var variantKeys = Object.keys(characterClasses[selectedClassKey].variants);
			generatedClassVariantKey = variantKeys[Math.floor(Math.random() * variantKeys.length)];
		}
		else {
			generatedClassVariantKey = selectedClassVariantKey;
		}
		var generatedClassVariant = characterClasses[selectedClassKey].variants[generatedClassVariantKey];
		// generate age
		var generatedAge;
		var generatedAgeRangeKey = selectedAgeRangeKey;
		switch (selectedAgeRangeKey) {
			case 'starting':
				generatedAge = characterRaces[selectedRaceKey].ageRanges['adult'] + utils.roll(characterRaces[selectedRaceKey].ageBrackets[characterClasses[selectedClassKey].ageBracket]);
				generatedAgeRangeKey = 'adult';
				break;
			case 'adult':
				var startingAge = characterRaces[selectedRaceKey].ageRanges['adult'] + utils.roll(characterRaces[selectedRaceKey].ageBrackets[characterClasses[selectedClassKey].ageBracket]);
				generatedAge = startingAge + Math.floor(Math.random() * (characterRaces[selectedRaceKey].ageRanges['middleaged'] - startingAge));
				break;
			case 'middleaged':
				var startingAge = characterRaces[selectedRaceKey].ageRanges['middleaged'];
				generatedAge = startingAge + Math.floor(Math.random() * (characterRaces[selectedRaceKey].ageRanges['old'] - startingAge));
				break;
			case 'old':
				var startingAge = characterRaces[selectedRaceKey].ageRanges['old'];
				generatedAge = startingAge + Math.floor(Math.random() * (characterRaces[selectedRaceKey].ageRanges['venerable'] - startingAge));
				break;
			case 'venerable':
				var startingAge = characterRaces[selectedRaceKey].ageRanges['venerable'];
				// roll their maximum age, then place them within that range
				var maximumAge = utils.roll(characterRaces[selectedRaceKey].ageRanges['maximum']);
				generatedAge = startingAge + Math.floor(Math.random() * maximumAge);
				break;
		}
		// generate height/weight
		var selectedPhysicalParameters = characterRaces[selectedRaceKey].physicalParameters[selectedGenderKey];
		var generatedHeightModifier = utils.roll(selectedPhysicalParameters.heightModifier);
		var generatedHeight = selectedPhysicalParameters.heightBase + generatedHeightModifier;
		var generatedWeightModifier = utils.roll(selectedPhysicalParameters.weightMultiplier) * generatedHeightModifier;
		var generatedWeight = selectedPhysicalParameters.weightBase + generatedWeightModifier;
		// generate raw abilities
		var abilityRolls = generationMethods[selectedGenerationMethodKey].generationFunction();
		// initialise generated abilities
		var generatedAbilities = {
			'str': new CharacterAbility('Strength', 10, 0, 0),
			'dex': new CharacterAbility('Dexterity', 10, 0, 0),
			'con': new CharacterAbility('Constitution', 10, 0, 0),
			'int': new CharacterAbility('Intelligence', 10, 0, 0),
			'wis': new CharacterAbility('Wisdom', 10, 0, 0),
			'cha': new CharacterAbility('Charisma', 10, 0, 0),
		}
		// assign abilities
		var prioritisedAbilities = [];
		var maxPriority = -Infinity;
		for (var ability in generatedClassVariant.abilities) {
			if (generatedClassVariant.abilities[ability] > maxPriority) {
				maxPriority = generatedClassVariant.abilities[ability];
			}
		}
		for (var priority = 0; priority <= maxPriority; priority++) {
			// find all abilities with given priority
			var abilities = [];
			for (var ability in generatedClassVariant.abilities) {
				if (generatedClassVariant.abilities[ability] === priority) {
					abilities.push(ability);
				}
			}
			// shuffle
			utils.shuffleArray(abilities);
			// assign abilities
			for (var abilityIndex = 0; abilityIndex < abilities.length; abilityIndex++) {
				prioritisedAbilities.push(abilities[abilityIndex]);
			}
		}
		for (var abilityIndex = 0; abilityIndex < prioritisedAbilities.length; abilityIndex++) {
			generatedAbilities[prioritisedAbilities[abilityIndex]].roll = abilityRolls[abilityIndex];
		}
		// apply racial modifiers
		for (var ability in generatedAbilities) {
			generatedAbilities[ability].racial = characterRaces[selectedRaceKey].abilityModifiers[ability];
		}
		// apply age modifiers
		for (var ability in generatedAbilities) {
			generatedAbilities[ability].age = characterAgeRanges[generatedAgeRangeKey].abilityModifiers[ability];
		}
		// render abilities
		for (var ability in generatedAbilities) {
			var abilityElementIdPrefix = 'gen-abilities-' + ability.toLowerCase();
			$('#' + abilityElementIdPrefix + '-roll').text(generatedAbilities[ability].roll);
			$('#' + abilityElementIdPrefix + '-racial').text(generatedAbilities[ability].racial);
			$('#' + abilityElementIdPrefix + '-age').text(generatedAbilities[ability].age);
			var total = generatedAbilities[ability].roll + generatedAbilities[ability].racial + generatedAbilities[ability].age;
			$('#' + abilityElementIdPrefix + '-total').text(total);
			$('#' + abilityElementIdPrefix + '-totalmodifier').text(Math.floor((total-10)/2));
		}
		// render height/weight/age
		var parsedHeight = Math.floor(generatedHeight/12) + '\' ' + (generatedHeight % 12) + '"';
		var parsedWeight = generatedWeight + ' lb.';
		$('#gen-basic-height').text(parsedHeight);
		$('#gen-basic-weight').text(parsedWeight);
		$('#gen-basic-age').text(generatedAge + ' (' + characterAgeRanges[generatedAgeRangeKey].name + ')');
		// render basic information
		$('#gen-basic-gender').text(characterGenders[selectedGenderKey].name);
		$('#gen-basic-race').text(characterRaces[selectedRaceKey].name);
		$('#gen-basic-class').text(characterClasses[selectedClassKey].name);
		$('#gen-basic-class-variant').text(characterClasses[selectedClassKey].variants[generatedClassVariantKey].name);
	};

	var initialise = function() {
		// add generation parameters
		var $generationGendersElements = utils.createDropdown(characterGenders, 'generation-gender', 'Gender');
		var $generationAgeRangesElements = utils.createDropdown(characterAgeRanges, 'generation-age-range', 'Age Range');
		var $generationRacesElements = utils.createDropdown(characterRaces, 'generation-race', 'Race');
		var $generationClassesElements = utils.createDropdown(characterClasses, 'generation-class', 'Class');
		var $generationClassVariantsElements = utils.createDropdown({}, 'generation-class-variant', 'Variant');
		$generationClassVariantsElements = $generationClassVariantsElements.add('<label />', {
			for: 'generation-class-variant-randomise',
			text: 'Randomise'
		}).add('<input />', {
			checked: true,
			id: 'generation-class-variant-randomise',
			type: 'checkbox'
		});
		var $generationMethodsElements = utils.createDropdown(generationMethods, 'generation-method', 'Method');
		$('#generation-parameters').append([
			$('<li />').append($generationGendersElements),
			$('<li />').append($generationAgeRangesElements),
			$('<li />').append($generationRacesElements),
			$('<li />').append($generationClassesElements),
			$('<li />').append($generationClassVariantsElements),
			$('<li />').append($generationMethodsElements)
		]);
		// add listener for class variant
		var updateClassVariants = function() {
			// remove existing options
			$generationClassVariantsElements.filter('select').empty();
			// add new options
			$generationClassVariantsElements.append(utils.createOptions(characterClasses[
				$(this).find('option:selected').val()
			].variants));
		}
		$generationClassesElements.filter('select').change(updateClassVariants);
		updateClassVariants.call($generationClassesElements.filter('select').get(0));
		// add generate button
		var $generateButtonElement = $('<button />', {
			text: 'Generate'
		}).click(generate);
		$('#generation-parameters').append($('<li />').append($generateButtonElement));
	};

	// expose functionality
	return {
		initialise: initialise
	};

});