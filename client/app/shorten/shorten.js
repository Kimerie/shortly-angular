angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', 'Links',function ($scope, $location, Links) {
  // Your code here
  console.log('in ShortenController')
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addLink(link);
  };

  }]);
