/**
 * 
 * @author: [Subhash]
 */

define([
    'angular',
    'MainModule'
], function(angular, app) {
  'use strict';
  
  app.directive('indifiBorrowersList', [function() {
    return {
      restrict: 'E',
      replace : true,
      templateUrl: 'app/borrowers/borrowers-list/borrowers-list.directive.tpl.html',
      scope:{
      	borrowers: "=",
        openListItem: '&',
        selectedItems: '='
      },
      link: function (scope, element, attrs, ctrl) {
        scope.viewItemDetails = function(id) {
          debugger;
          scope.openListItem({'id': id});
        },
        scope.toggleRow = function(index) {
          scope.borrowers[index]['selected'] = !scope.borrowers[index]['selected'];
        }
      }
    };
  }]);
});