/**
* This directive will include HTML template without creating new scope.
* 
* @author: [Rajesh Soni]
**/

define(['MainModule'], function(app) {
	"use strict";

	app.directive('indifiTemplate', ['$compile', '$templateCache', '$http', function($compile, $templateCache, $http) {
		return {
			restrict: 'A',
			replace : true,
			link : function(scope, element, attrs) {
				scope.$watch(function() {
					return attrs.indifiTemplate;
				}, renderTemplate);

				function renderTemplate() {
					$(element).empty();
					if (attrs.indifiTemplate) {
						$http.get(attrs.indifiTemplate, {cache: $templateCache})
						.success(function (response) {
							element.html(response);
							$compile(element.contents())(scope);
						});
					}
				}
			}
		};
	}]);
});