(function() {
	'use strict';

	angular
		.module('barebone.unidades')
		.controller('UnidadesController', UnidadesController);

	UnidadesController.$inject = ['$scope', '$stateParams', 'unidadesService'];

	/* @ngInject */
	function UnidadesController($scope, $stateParams, unidadesService) {
		var vm = angular.extend(this, {
			id:"",
			unidades: [],
			profissional: [],
			doRefresh: doRefresh
		});

		// ******************************************************

		var id = $stateParams.id;

		unidadesService.get(id, function(unidades) {
			
			vm.unidades = unidades;
			vm.id = id;

			console.log(vm.unidades);			

			for (var i in vm.unidades) {
				if (vm.unidades.hasOwnProperty(i)) {
					// telefones
					if (vm.unidades[i].an_telefone !== undefined){
						vm.unidades[i].telefones = vm.unidades[i].an_telefone.split('<br>');
					}

				}
			}

		});

		function doRefresh() {
			unidadesService.get(vm.id, function(data) {
				vm.unidades = data;
				vm.id = id;

				// telefones
				for (var i in vm.unidades) {
					if (vm.unidades.hasOwnProperty(i)) {
						if (vm.unidades[i].an_telefone !== undefined){
							vm.unidades[i].telefones = vm.unidades[i].an_telefone.split('<br>');
						}
					}
				}
			});

			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}
})();