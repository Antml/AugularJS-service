angular.module('zhangxiaoyunApp')
  .controller('updateCtrl', function ($scope,$location,localStorageService,contactService) {
  var id = $location.search().id;
  $scope.newItem = contactService.get(id);

  $scope.updateItem = function(){
    contactService.updateItems($scope.newItem);
    $scope.newItem = {};
  };
});
