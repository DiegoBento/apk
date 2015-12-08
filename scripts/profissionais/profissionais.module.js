(function() {
	'use strict';

	angular
		.module('barebone.profissionais', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.profissionais', {
					url: '/profissionais',
					views: {
						'menuContent': {
							templateUrl: 'scripts/profissionais/profissionais.html',
							controller: 'ProfissionaisController as vm'
						}
					}
				})
				.state('app.profissional', {
					url: '/profissionais/:id',
					views: {
						'menuContent': {
							templateUrl: 'scripts/profissionais/profissionais.html',
							controller: 'ProfissionaisController as vm'
						}
					}
				})
		});

})();