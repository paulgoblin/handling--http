'use strict'

let API = 'https://damp-reaches-8819.herokuapp.com'
console.log("watch example");

angular.module('clogApp', [])

.controller('DisplayController', function($scope, ClogsService){
  var clogsWatcher = () => ClogsService.clogs
  $scope.clogs = [];
  $scope.$watch( clogsWatcher, (newClogs) => $scope.clogs = newClogs, true);
  $scope.getClogs = ClogsService.getClogs;
})

.service('ClogsService', function($http){
  this.clogs = [];
  this.getClogs = () => {
    $http.get(`${API}/clogs`)
      .then((response) => {
        this.clogs = response.data;
      });
  };
});
