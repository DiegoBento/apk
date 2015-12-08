(function() {
	'use strict';

	angular
		.module('barebone.chats')
		.controller('ChatRoomsController', ChatRoomsController);

	ChatRoomsController.$inject = ['$state', 'chatRoomsService', '$rootScope'];

	/* @ngInject */
	function ChatRoomsController($state, chatRoomsService, $rootScope) {
		var vm = angular.extend(this, {
			rooms: chatRoomsService.getAll(),
			openChatRoom: openChatRoom,
			showChatPrivate: showChatPrivate,
			showChatPublic: showChatPublic,
			loggedUser: $rootScope.user			
		});

		(function activate() {
		})();

		//********************************************************************

		function openChatRoom(roomId) {
			$state.go('app.chat-room', {
				roomId: roomId
			});
		}
		
		function showChatPrivate() {
			$state.go('app.chat-private');
		}

		function showChatPublic() {
			$state.go('app.chat-public');
		}
	}
})();