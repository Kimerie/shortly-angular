angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  
  $scope.data ={};

  ($scope.getLinks = function (){
    Links.getLinks().then(function(link){
    console.log('hellooooooooooooooooooooooo', link);
    $scope.data['links'] = link;
    })
  })()
  
}]);
