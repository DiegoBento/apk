(function() {
	'use strict';

	angular
		.module('barebone.chats', [
			'ionic',
			'firebase'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.chats-login', {
					url: '/chats-login',
					views: {
						'menuContent': {
							templateUrl: 'scripts/chats/auth/chats-login.html',
							controller: 'ChatsLoginController as vm'
						}
					}
				})
				.state('app.chat-public', {
					url: '/chat-public',
					views: {
						'menuContent': {
							templateUrl: 'scripts/chats/rooms/chat-public.html',
							controller: 'ChatRoomsController as vm'
						}
					},resolve: {"currentAuth": ["$rootScope", "$state", "$window",
            			function ($rootScope, $state, $window) {
							console.log($rootScope.user.isSignedIn);
							if ($rootScope.user.isSignedIn){
								console.log('True');
							}else{
								console.log('False');
								$window.location.href = ('#/app/chats-login');
								//$state.go('app/chats-login');
							}
                			//return $rootScope.auth.$requireAuth();
    					}]
					}
				})
				.state('app.chat-room', {
					url: '/chat-rooms/:roomId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/chats/room/chat-room.html',
							controller: 'ChatRoomController as vm'
						}
					}
				});
		});
})();