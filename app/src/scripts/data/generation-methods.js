define([
	'generation-method',
	'utils'
], function(GenerationMethod, utils) {

	/**
	 * TODO: documentation
	 */
	var generationMethods = {
		'3d6': new GenerationMethod('3d6', function() {
			var abilities = [];
			for (var ability = 0; ability < 6; ability++) {
				abilities[ability] = utils.roll('3d6');
			}
			return abilities.sort(function(a,b) {
				return b-a;
			});
		}),
		'4d6b3': new GenerationMethod('4d6, best 3', function() {
			var abilities = [];
			for (var ability = 0; ability < 6; ability++) {
				var rolls = [];
				for (var roll = 0; roll < 4; roll++) {
					rolls[roll] = utils.roll('1d6');
				}
				abilities[ability] = rolls.sort(function(a,b) {
					return b-a;
				}).slice(0, 3).reduce(function(pv, cv) {
					return pv + cv;
				}, 0);;
			}
			return abilities.sort(function(a,b) {
				return b-a;
			});
		}),
		'elite': new GenerationMethod('Elite array', function() {
			return [15, 14, 13, 12, 10, 8];
		}),
		'nonelite': new GenerationMethod('Non-elite array', function() {
			return [13, 12, 11, 10, 9, 8];
		})
	};

	// expose functionality
	return generationMethods;

});