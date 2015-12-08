(function() {
	'use strict';

	angular
		.module('barebone.chats')
		.controller('ChatsLoginController', ChatsLoginController);

	ChatsLoginController.$inject = [
		'$rootScope', '$scope', '$ionicModal', '$state', '$ionicLoading', 'chatsAuthService'];

	/* @ngInject */
	function ChatsLoginController($rootScope, $scope, $ionicModal, $state, $ionicLoading, chatsAuthService) {
		var vm = angular.extend(this, {
			user: {
				email: null,
				password: null
			},
			signIn: signIn,
			signUp: signUp,
			signOut: signOut,
			showChatPublic: showChatPublic,
			loggedUser: $rootScope.user
		});

		$ionicModal.fromTemplateUrl('scripts/chats/auth/chats-signup.html', {
			scope: $scope
		}).then(function(modal) {
			vm.modal = modal;
		});

		function signUp(user) {
			if (vm.user.email && vm.user.password && vm.user.displayname) {
				$ionicLoading.show({});
				chatsAuthService.signUp(user).then(function() {
					$ionicLoading.hide();
					vm.modal.hide();
				}).catch(function(error) {
					$ionicLoading.hide();
					alert('Erro: ' + error);
				});
			} else {
				alert('Preencha todas as informações');
			}
		}

		function signOut() {
			chatsAuthService.signOut();
		}

		function signIn() {
			if (vm.user.email && vm.user.password) {
				$ionicLoading.show({});
				chatsAuthService.signIn(vm.user.email, vm.user.password).then(function(authData) {
					$ionicLoading.hide();
					//$state.go('app.chat-public');
				}).catch(function(error) {
					$ionicLoading.hide();
					switch (error.code) {
						case "INVALID_EMAIL":
							alert("E-mail inválido");
							break;
						case "INVALID_PASSWORD":
							alert("Senha inválida");
							break;
						case "INVALID_USER":
							alert("The specified user account does not exist.");
							break;
						default:
							alert('Falha na autenticação: ' + error.message);
							break;
						}
				});
			} else {
				alert('Informe o e-mail e senha');
			}
		}

		function showChatPublic() {
			$state.go('app.chat-public');
		}
	}
})();