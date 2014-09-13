angular.module('zhangxiaoyunApp')
  .controller('contactCtrl', function ($scope,$location,localStorageService,contactService) {
  // $scope.value = false;
  $scope.categories = localStorageService.get('categories');
  $scope.items = contactService.set();
  $scope.removeItem = function(name){
    contactService.removeItem(name);
    $scope.items = localStorageService.get('items');
  };
  $scope.saveItem = function(category,name,price,unit){
    // $scope.newItem = {id:0,category:category,name:name,price:price,unit:unit};
    // $scope.newItem.id = category
    $scope.items = contactService.saveItem($scope.newItem);
    $scope.newItem = {};
  };
  $scope.updateclick = function(name){
    $location.path('update');
    $location.search({'name':name});
  };
});
