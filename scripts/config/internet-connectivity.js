(function() {
	'use strict';

	angular
		.module('starter')
		.config(function($httpProvider) {
			$httpProvider.interceptors.push(function($cordovaNetwork, $q, $rootScope, $injector) {
				return {
					request: function(config) {
						if (!ionic.Platform.isReady) {
							return config;
						}

						if (config.url.indexOf('http') !== 0) {
							return config;
						}

						var isOnline = getNetworkStatus();

						if (isOnline) {
							return config;
						}

						var $ionicPopup = $injector.get('$ionicPopup');
						var alertPopup = $ionicPopup.alert({
							title: 'Aviso',
							template: 'Conexão de internet não identificada'
						});

						return $q.reject('Conexão de internet não identificada');
					},
					response: function(response) {
						return response;
					}
				};

				function getNetworkStatus() {
					//var isPluginAvailable = !!navigator.connection;
	  				//if (isPluginAvailable) {

					if (ionic.Platform.isWebView()){
						return $cordovaNetwork.isOnline();    
					} else {
						return navigator.onLine;
					}
	  
				}
			});
		});
})();