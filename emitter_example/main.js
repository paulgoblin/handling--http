'use strict'

let API = 'https://damp-reaches-8819.herokuapp.com'
console.log("watch example");

angular.module('clogApp', [])

.controller('DisplayController', function($scope, ClogsService){
  $scope.clogs = [];
  $scope.getClogs = ClogsService.getClogs;
  $scope.$on('got-new-clogs', () => $scope.clogs = ClogsService.clogs);
})

.service('ClogsService', function($http, $rootScope){
  this.clogs = [];
  this.getClogs = () => {
    $http.get(`${API}/clogs`)
      .then((response) => {
        this.clogs = response.data;
        $rootScope.$broadcast('got-new-clogs')
      });
  };
});
