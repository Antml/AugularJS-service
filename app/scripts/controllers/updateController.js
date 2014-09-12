angular.module('zhangxiaoyunApp')
  .controller('updateCtrl', function ($scope,$location,localStorageService,contactService) {
  var name = $location.search().name;
  $scope.newItem = contactService.get(name);

  $scope.updateItem = function(){
    contactService.updateItems($scope.newItem);
    $scope.newItem = {};
  };
});
