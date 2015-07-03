require.config({
	paths: {
		'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min', '../vendor/jquery/dist/jquery.min'],
		'angular': ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular', '../vendor/angular/angular.min'],
		'angular-resource': ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-resource.min', '../vendor/angular-resource/angular-resource'],
		'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router.min',
		'angular-sanitize': ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.min', '../vendor/angular-sanitize/angular-sanitize.min'],

		'ocLazyLoad': '../vendor/ocLazyLoad/dist/ocLazyLoad.min',
		'toastr': '/vendor/toastr/toastr.min',
		'moment': '/vendor/moment/min/moment.min',
		'bg-enter': '/app/shared/bg-enter.directive',
		'MainModule' : 'app.module',
	},
	shim: {
		'angular': {
			exports: 'angular',
			deps: ['jquery']
		},
		'angular-ui-router': ['angular'],
		'angular-sanitize': ['angular'],
		'angular-resource': ['angular'],
		'ocLazyLoad': ['angular'],
		'app': ['angular']
	}
});

requirejs(['app.vendor.dependency', 'app.config'], function(){
	requirejs(['MainModule'], function() {
		requirejs(['app.dependency'], function() {
			angular.element(document).ready(function() {
				angular.bootstrap(document, ['Indifi']);
			});
		});
	});
});
