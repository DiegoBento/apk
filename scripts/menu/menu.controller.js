(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$rootScope'];

	/* @ngInject */
	function MenuController($rootScope) {

		var vm = angular.extend(this, {
			loggedUser: $rootScope.user			
		});
		
	}
})();