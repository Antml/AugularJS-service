angular.module('zhangxiaoyunApp')
  .controller('contactCtrl', function ($scope,$location,localStorageService,contactService) {
  // $scope.value = false;
  $scope.categories = localStorageService.get('categories');
  $scope.items = contactService.set();
  $scope.removeItem = function(name){
    contactService.removeItem(name);
    $scope.items = localStorageService.get('items');
  };
  $scope.saveItem = function(newItem){
    // $scope.newItem = {id:0,category:category,name:name,price:price,unit:unit};
    // $scope.newItem.id = category
    // $scope.items = contactService.saveItem($scope.newItem);
    // $scope.newItem = {};
    var items = contactService.set();
    var item = {id:0,category:newItem.category,name:newItem.name,price:newItem.price,unit:newItem.unit};
    item.id = items[items.length-1].id + 1;
    items.push(item);
    localStorageService.set('items',items);
    $scope.items =contactService.set();
    $scope.newItem = {};
    alert('添加成功');
  };
  $scope.updateclick = function(id){
    $location.path('update');
    $location.search({'id':id});
  };
});
