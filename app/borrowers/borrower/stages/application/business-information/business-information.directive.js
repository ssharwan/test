define([
    'angular',
    'MainModule'
], function(angular, app) {
  'use strict';
  
  app.directive('indifiBorrowerBusinessInfo', [function() {
    return {
      restrict: 'E',
      replace : true,
      templateUrl: 'app/borrowers/borrower/stages/application/business-information/business-information.directive.tpl.html',
      scope:{
      	businessInformation: "="
      },
      link: function (scope, element, attrs, ctrl) {
        

        element.find('.sss')
          .popup({
             inline: true,
             easing: 'easeOutQuad',
            on: 'click'
        });
        
      }
    };
  }]);
});