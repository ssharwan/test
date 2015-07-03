	/**
	* @author: [Subhash]
	*/

define(['angular', 'MainModule'], function(angular, app) {
	'use strict';

	app.controller('BorrowerController', ['$scope', '$q', '$http', 'AppContext', '$state',
		function (scope, $q, $http, AppContext, state) {
			scope.id = state.params.borrowerId;
			scope.borrower =null,
			scope.close = function() {
				state.transitionTo('home.borrowers');
			};

			$http.get('http://localhost:3000/borrowers/'+scope.id).
			  success(function(data, status, headers, config) {
			  	scope.borrower = data;

			});

		}
	]);
});