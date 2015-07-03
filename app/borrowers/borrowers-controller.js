define(['angular', 'MainModule'], function(angular, app) {
	'use strict';

	/**
	* @author: [Subhash]
	*/

	app.controller('BorrowersController', ['$scope', '$q', '$http', 'AppContext', '$state',
		function (scope, $q, $http, AppContext, state) {

			scope.topLevelViews = ['All', 'Mine'];
			scope.selectedTopLevelViewIndex = 0; 
			scope.selectTopLevelView = function(index){
			  scope.selectedTopLevelViewIndex = index;
			  fetchPipelineData();
        fetchBorrowers();
			}
            
      scope.filterState = false;
			scope.toggleFilters = function(){
        scope.filterState = !scope.filterState;
			}
			
			scope.pipeline = [];
      scope.borrowers = [];
      scope.selectedPipelineIndex = 0;
      scope.currentlyOpenedIndex = null;
      scope.openBorrower = function(index){
      	scope.currentlyOpenedIndex = index;
      	var id = scope.borrowers[index].id;
        state.transitionTo('home.borrowers.borrower', {borrowerId: id});
      };
      scope.next = function(){
				scope.openBorrower(scope.currentlyOpenedIndex+1);
			};
			scope.previous = function(){
				scope.openBorrower(scope.currentlyOpenedIndex-1);
			};
      scope.loadPipelineStage = function(index){
      	console.log("loadPipelineStage");
        scope.selectedPipelineIndex = index;
      	scope.borrowers.push({id: 100 + index, name: 'Subahsh_x_'+index , source: "TBO", amount: 22.34, duration: '18 Mo', nextStep: 'Contact Business',
	  	    owner: 'SD', completed: '20%', received: 'June 10'
	  	  });
      }
      function fetchPipelineData(){
        $http.get('http://localhost:3000/pipeline').
			  success(function(data, status, headers, config) {
			  	scope.pipeline = data;
			  });	
      }
      function fetchBorrowers(){
      	debugger;
      	$http.get('http://localhost:3000/borrowers').
			  success(function(data, status, headers, config) {
			  	scope.borrowers = data;
			  });   
      }
      scope.loadMore = function(){
      	$http.get('http://localhost:3000/borrowers').
			  success(function(data, status, headers, config) {
			  	for(var i =0 ; i< data.length; i++)
			  		scope.borrowers.push(data[i]);
			  });
      } 
	    fetchPipelineData();
      fetchBorrowers();
		}
	]);
});