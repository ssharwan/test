
define([
    'angular',
    'MainModule'
], function(angular, app) {
  'use strict';
  
  app.directive('indifiHeader', [function() {
    return {
      restrict: 'E',
      replace : true,
      templateUrl: 'app/shared/header/header.directive.tpl.html',
      scope:{
      },
      link: function (scope, element, attrs, ctrl) {
        scope.model = {};


      },

      controller: ['$scope', '$q', '$http', 'MessageFactory', function (scope, $q, $http, MessageFactory) {

      }]
    };
  }]);
});