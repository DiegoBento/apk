(function() {
	'use strict';

	angular
		.module('barebone.unidades', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.unidades', {
					url: '/unidades/:id',
					views: {
						'menuContent': {
							templateUrl: 'scripts/unidades/unidades.html',
							controller: 'UnidadesController as vm'
						}
					}
				})
		});

})();