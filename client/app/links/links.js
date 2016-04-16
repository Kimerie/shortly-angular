angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  console.log('in LinksController')
  
  $scope.data ={};

  ($scope.getLinks = function (){
    Links.getLinks().then(function(link){
      console.log('hellooooooooooooooooooooooo', link);
      $scope.show = true
      $scope.data['links'] = link;

    })
  })()
  
}]);
