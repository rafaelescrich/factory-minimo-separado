(function() {
    'use strict';
    angular.module('myApp')
      .factory('RecursoService', ['$http',
          function($http) {
              return {
                  getAll: function(callback) {
                      $http({
                          method: 'get',
                          url: 'http://portalmecapi.c3sl.ufpr.br/v1/learning_objects'
                      }).success(function(data) {
                          console.log(data);
                          callback(data);
                      }).error(function() {
                          alert("error getAll");
                      });
                  },
                  getOne: function(id, callback) {
                    $http({
                        method: 'get',
                        url: 'http://portalmecapi.c3sl.ufpr.br/v1/learning_objects/' + id + '?obba='
                    }).success(function(data) {
                        console.log(data);
                        callback(data);
                    }).error(function() {
                        alert("error getOne");
                    });
                  }
              };
          }
      ]);
})();
