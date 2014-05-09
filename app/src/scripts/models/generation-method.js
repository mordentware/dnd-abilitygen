define(function() {

	/**
	 * TODO: documentation
	 */
	var GenerationMethod = function(name, generationFunction) {
		this.name = name;
		this.generationFunction = generationFunction;
	};

	// expose functionality
	return GenerationMethod;

});