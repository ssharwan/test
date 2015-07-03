/**
 * Borrowers  module definition with its route configurations
 *
 * @author: [Subhash]
 */
define([
	'angular'
], function(angular) {
	'use strict';

	var app = angular.module('IndifiBorrowers', ["angularMoment"]);

	app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
		function($controllerProvider, $compileProvider, $filterProvider, $provide) {
			app.controller = $controllerProvider.register;
			app.service = $provide.service;
			app.factory = $provide.factory;
			app.filter = $filterProvider.register;
			app.directive = $compileProvider.directive;
		}
	]);

	return app;
});