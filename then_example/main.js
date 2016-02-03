'use strict'

let API = 'https://damp-reaches-8819.herokuapp.com';
console.log("then example");

angular.module('clogApp', [])

.controller('DisplayController', function($scope, ClogsService){
  $scope.clogs = [];
  $scope.getClogs = () => {
    ClogsService.getClogs()
      .then( (response) => {
        ClogsService.clogs = response.data;
        $scope.clogs = ClogsService.clogs;
      });
  };
})

.service('ClogsService', function($http){
  this.clogs = [];
  this.getClogs = () => $http.get(`${API}/clogs`);
});
