angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', 'Links',function ($scope, $location, Links) {
  // Your code here
  console.log('in ShortenController')
  $scope.link = {};
  $scope.addLink = function(link) {
    console.log('LINK INSIDE SHORTEN JS:', link);
    // Links.addLink(link);
    $scope.link[link] = Links.addLink(link);
  };

  }]);
