/**
 * 
 * @author: [Subhash]
 */

define([
    'angular',
    'MainModule'
], function(angular, app) {
  'use strict';
  
  app.directive('indifiBorrowersPipeline', [function() {
    return {
      restrict: 'E',
      replace : true,
      templateUrl: 'app/borrowers/borrowers-pipeline/borrowers-pipeline.directive.tpl.html',
      scope:{
      	pipeline: "=",
        onStageChange: "&",
        selected: '=' 
      },
      
      link: function (scope, element, attrs, ctrl) {
        scope.selectIt = function (index) {
          scope.onStageChange({'index': index});

        }
      }
    };
  }]);
});