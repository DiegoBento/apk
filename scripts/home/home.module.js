(function() {
	'use strict';

	angular
		.module('barebone.home', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.home', {
					url: '/home',
					views: {
						'menuContent': {
							templateUrl: 'scripts/home/home.html',
							controller: 'HomeController as vm'
						}
					}/*,
					resolve: {"currentAuth": ["$rootScope",
            			function ($rootScope) {
				            // $requireAuth returns a promise so the resolve waits for it to complete
         					// If the promise is rejected, it will throw a $stateChangeError
                			return $rootScope.auth.$requireAuth();
    					}]
					}*/
				});
		});
})();