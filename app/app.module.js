define(['angular', 'angular-ui-router', 'ocLazyLoad'], function (angular) {

	'use strict';
	var app = angular.module("Indifi", [
		"ui.router",
		"oc.lazyLoad"
	]);

	app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
			asyncLoader: requirejs
		});
	}]);

	app.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
	}]);

	app.config(['$locationProvider', function($locationProvider) {
		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requireBase: true,
		// 	rewriteLinks: true
		// });
	}]);

	app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
		function($controllerProvider, $compileProvider, $filterProvider, $provide) {
			app.controller = $controllerProvider.register;
			app.service = $provide.service;
			app.factory = $provide.factory;
			app.filter = $filterProvider.register;
			app.directive = $compileProvider.directive;
		}
	]);

	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('home', {
			url: "/",
			template: "</div><div ui-view></div></div>",
			controller: ['$state', 'AppContext', function ($state, AppContext) {
				$state.go('home.borrowers');
			}]
		})
		.state('home.borrowers', {
			templateUrl: "app/views/borrowers.view.html",
			url:'/borrowers',
			controller: 'BorrowersController',
			resolve: {
				lazyLoad: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load({
						name: 'IndifiBorrowers',
						files: ['app/borrowers/borrowers.module.js', 'app/borrowers/borrowers.dependency.js', 'assets/css/borrowers.view.css']
					})
				}]
			}
		})
		.state('home.borrowers.borrower', {
			templateUrl: "app/views/borrower.view.html",
			controller: 'BorrowerController',
			url:'/{borrowerId}',
			resolve: {
				lazyLoad: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load({
						name: 'IndifiBorrower',
						files: ['app/borrowers/borrower/borrower.module.js', 'app/borrowers/borrower/borrower.dependency.js', 'assets/css/borrower.view.css']
					})
				}]
			}
		})
		
	}]);

	return app;
});