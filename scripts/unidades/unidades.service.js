(function() {
	'use strict';

	angular
		.module('barebone.unidades')
		.factory('unidadesService', unidadesService);

	unidadesService.$inject = ['$q', '$http'];

	/* @ngInject */
	function unidadesService($q, $http) {

		var service = {
			get: get
		};
		
		return service;

		// ******************************************************************

		// http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
		function get(id, callback) {
			
			var result = [];
			var url = 'http://2tti.maxapex.net:9091/apex/dese/unidades/' + id;

			$http.get(url)
				.success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					result = data.items;
					callback(result);
				})
				.error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					console.log('ERROR (/unidades):' + status);
					callback(result);
				});
		}
				
	}
})();