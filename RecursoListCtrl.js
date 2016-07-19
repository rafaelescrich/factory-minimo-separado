(function() {
    'use strict';
    angular.module('myApp')
      .controller('RecursoListCtrl', ['$scope', 'RecursoService',
        function($scope, RecursoService){

          RecursoService.getAll(function(data) {
            console.log(data);
            $scope.recursos = data;
          });

        }]);
})();
