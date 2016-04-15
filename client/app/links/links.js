angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // Your code here
  // getlinks();
  // console.log('this is $scope.data -- ###############:', $scope.data);
  // $scope.Links = {};
  // $scope.getlinks = Links.getlinks();
  $scope.getLinks = function() {
    Links.getLinks();
  };

  var data = function() {
    console.log('what is this?', Links.getLinks());
    console.log('data from get req', data.data)
    return data.data;
  };

  $scope.data = data();
  
  // $scope.data = Links.getlinks();
  // console.log('*****************************************this is Links:', Links);
  console.log("we made it!!!", $scope.data);
  // $scope
}]);
