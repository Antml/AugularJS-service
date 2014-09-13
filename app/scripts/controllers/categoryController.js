angular.module('zhangxiaoyunApp')
  .controller('categoryCtrl', function ($scope,$location,localStorageService,contactService,categoryService) {

    $scope.categories =categoryService.getCategories();
    $scope.removeCategory = function(category){
      categoryService.delete(category);
      $scope.categories =categoryService.getCategories();
    }
    $scope.addCategory = function(name){
      var newCategory = {id:0,name:name};
      var categories = categoryService.getCategories();
      newCategory.id = categories[categories.length-1].id + 1;
      categories.push(newCategory);
      localStorageService.set('categories',categories);
      $scope.categories =categoryService.getCategories();
      $scope.newCategory = {};
      alert('添加成功！');
    }
    $scope.updateClick = function(id){
      $location.path('updateCategory');
      $location.search({'id':id});
    }
});
