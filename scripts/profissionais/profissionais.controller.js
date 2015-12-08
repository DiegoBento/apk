(function() {
	'use strict';

	angular
		.module('barebone.profissionais')
		.controller('ProfissionaisController', ProfissionaisController);

	ProfissionaisController.$inject = ['$scope', '$stateParams', 'profissionaisService'];

	/* @ngInject */
	function ProfissionaisController($scope, $stateParams, profissionaisService) {
		var vm = angular.extend(this, {
			id:"",
			profissionais: [],
			doRefresh: doRefresh
		});

		// ******************************************************

		var id = $stateParams.id;

		profissionaisService.get(id, function(profissionais) {

			vm.profissionais = profissionais;
			vm.id = id;

			// telefones
			for (var i in vm.profissionais) {
				if (vm.profissionais.hasOwnProperty(i)) {
					if (vm.profissionais[i].an_telefone !== undefined){
						vm.profissionais[i].telefones = vm.profissionais[i].an_telefone.split('<br>');
					}
				}
			}

		});

		function doRefresh() {
			profissionaisService.get(vm.id, function(data) {
				vm.profissionais = data;
				vm.id = id;

				// telefones
				for (var i in vm.profissionais) {
					if (vm.profissionais.hasOwnProperty(i)) {
						if (vm.profissionais[i].an_telefone !== undefined){
							vm.profissionais[i].telefones = vm.profissionais[i].an_telefone.split('<br>');
						}
					}
				}
			});

			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}
})();