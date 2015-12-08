(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Unidades',
			path: 'unidades/3',
			icon: 'fa fa-building-o'
		}, {
			title: 'Profissionais',
			path: 'profissionais',
			icon: 'fa fa-users'
		}, {
			title: 'Chat',
			path: 'chats-login',
			icon: 'fa fa-comments'
		}, {
			title: 'Metas',
			path: 'charts',
			icon: 'fa fa-pie-chart'
		}, {
			title: 'Notícias',
			path: 'articles',
			icon: 'fa fa-rss-square'
		}, {
			title: 'Eventos',
			path: 'events',
			icon: 'fa fa-calendar'
		}];

		return data;
	}
})();