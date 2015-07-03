/**
 * Http Interceptor.
 * @author: [Rajesh Soni]
 */

define(['MainModule'], function(app) {
	"use strict";

	app.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push(['$q', function($q) {
			return {
				request: function(httpConfig) {
					
					return httpConfig;
				},
				response: function(response) {
					
					return response;
				},

				responseError: function(response) {
					var status = response.status;
					// The HTTP request was not successful.
					// It's possible to use interceptors to handle specific errors. For example:
					if (status === 401) {
						// The request requires user authentication
						// window.location.href = Globals.appConfig.loginUrl + "?r=" +  window.location.href;
					}
					if (status === 404 || status === 500) {
						// MessageService.error("Oops! Something went wrong while processing your request.");
					}
					// $q.reject creates a promise that is resolved as rejectedwith the specified reason. 
					// In this case the error callback will be executed.
					return $q.reject(response);
				}
			}
		}])
	}])
});