(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('homeDataService', homeDataService);

	homeDataService.$inject = [];

	/* @ngInject */
	function homeDataService() {
		return {
			phoneNumber: '+551112345678',
			email: 'contato@2tti.com.br',
			officeLocation: '37.7736854,-122.421034',
			facebookPage: 'https://www.facebook.com/2tti_consultoria'
		};
	}
})();
