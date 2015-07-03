/*
 * @author: [Rajesh Soni]
 */
define(['angular', 'MainModule'], function(angular, app) {
	'use strict';

	app.factory('AppContext', ['$q', '$http', function($q, $http) {
		var loggedInUser, userPermissions = {};
		return {
			/*
				Returns true if a JWT is present in Local Storage and it is not expired, otherwise returns false.
				Note: This method expects the exp claim to check for the expiration time.
			*/
			isAuthenticated: function() {
				return true;
			},

			getLoggedInUser :function(argument) {
				//TODO
			},

			getPermissions : function (permissionName) {
				//TBD
			}
		};
	}]);
});