// configure AMD
require.config({
	paths: {
		// vendor libraries
		'jquery':                          'lib/vendor/jquery-2.1.0.min',
		// application
		'app':                             'app',
		'utils':                           'lib/utils',
		'character-age-ranges':            'data/character-age-ranges',
		'character-classes':               'data/character-classes',
		'character-genders':               'data/character-genders',
		'character-races':                 'data/character-races',
		'character-starting-age-brackets': 'data/character-starting-age-brackets',
		'generation-methods':              'data/generation-methods',
		'character-ability':               'models/character-ability',
		'character-age-range':             'models/character-age-range',
		'character-class':                 'models/character-class',
		'character-class-variant':         'models/character-class-variant',
		'character-gender':                'models/character-gender',
		'character-race':                  'models/character-race',
		'character-starting-age-bracket':  'models/character-starting-age-bracket',
		'generation-method':               'models/generation-method'
	}
});

// application
require([
	'jquery',
	'app'
], function($, app) {
	$(document).ready(app.initialise);
});