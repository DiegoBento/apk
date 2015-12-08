(function() {
	'use strict';

	angular
		.module('barebone.chats')
		.factory('chatsAuthService', chatsAuthService);

	chatsAuthService.$inject = ['$rootScope', '$q', '$firebaseAuth', 'firebaseDb', '$timeout'];

	/* @ngInject */
	function chatsAuthService($rootScope, $q, $firebaseAuth, firebaseDb, $timeout) {
		$rootScope.auth = $firebaseAuth(firebaseDb);
		$rootScope.user = {isSignedIn: false};

		var service = {
			user: $rootScope.user,
			signIn: signIn,
			signUp: signUp,
			signOut: signOut,
		};

		firebaseDb.onAuth(function(data) {
			if (!data) {
				setUser();
			} else {
				getUser(data.uid).then(function(user) {
					setUser(user);
				});
			}
		});

		return service;

		// *******************************************************************

		function signOut() {
			setUser();
			$rootScope.auth.$unauth();
		}

		function signUp(user) {
			return $rootScope.auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function(userData) {
				alert('User created successfully!');

				firebaseDb.child('users').child(userData.uid).set({
					email: user.email,
					displayName: user.displayname
				});

				return userData;
			});

		}

		function signIn(email, password) {
			return $rootScope.auth.$authWithPassword({
				email: email,
				password: password
			}).then(function(authData) {
				console.log('Logged in as:' + authData.uid);
				
				getUser(authData.uid).then(function(user) {
					setUser(user);
				});

				return authData;
			});
		}

		function getUser(uid) {
			var deferred = $q.defer();

			firebaseDb.child('users').child(uid).once('value', function(snapshot) {
				var val = snapshot.val();
				deferred.resolve(val);
				val.uid = uid;
				console.log(val);
			});

			return deferred.promise;
		}

		function setUser(user) {
			$timeout(function() {
				if (!user) {
					$rootScope.user.uid = null;
					$rootScope.user.email = null;
					$rootScope.user.displayName = null;
					$rootScope.user.isSignedIn = false;
				} else {
					$rootScope.user.uid = user.uid;
					$rootScope.user.email = user.email;
					$rootScope.user.displayName = user.displayName;
					$rootScope.user.isSignedIn = true;
				}
			}, 200);
		}
	}
})();