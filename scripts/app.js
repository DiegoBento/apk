// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', [
						 'config',
						 'ionic',
						 'ionic.service.core',
						 'ionic.service.push',
						 'gMaps',
						 'ngCordova',
						 'barebone.ad',
						 'barebone.apprate',
						 'barebone.charts',
						 'barebone.chats',
						 'barebone.common',
						 'barebone.drupal',
						 'barebone.elements',
						 'barebone.events',
						 'barebone.facebook',
						 'barebone.feedback',
						 'barebone.galleries',
						 'barebone.home',
						 'barebone.infrastructure',
						 'barebone.instagram',
						 'barebone.lo-storage',
						 'barebone.map',
						 'barebone.menu',
						 'barebone.news',
						 'barebone.oauth',
						 'barebone.popover-menu',
						 'barebone.position',
						 'barebone.products',
						 'barebone.products-extended',
						 'barebone.profissionais',
						 'barebone.push',
						 'barebone.restaurant',
						 'barebone.rss-feeds',
						 'barebone.shopping-cart',
						 'barebone.sqlite',
						 'barebone.stream',
						 'barebone.swipeable-cards',
						 'barebone.tinder-cards',
						 'barebone.unidades',
					 	 'barebone.vimeo',
					 	 'barebone.wordpress',
						 'barebone.youtube'
])

.value('_', window._)

.run(function($ionicPlatform, $rootScope, $window, $q, $firebase, $ionicLoading, $firebaseAuth, firebaseDb, $timeout) {
  	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

	});
})

.config(function($urlRouterProvider, $compileProvider) {
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});
