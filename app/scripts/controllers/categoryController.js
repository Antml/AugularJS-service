angular.module('zhangxiaoyunApp')
  .controller('categoryCtrl', function ($scope,$location,localStorageService,contactService,categoryService) {

    $scope.categories =categoryService.getCategories();
    $scope.removeCategory = function(category){
      categoryService.delete(category);
      $scope.categories =categoryService.getCategories();
    }
    $scope.addCategory = function(name){
      $scope.newCategory = {id:0,name:name};
      var categories = categoryService.getCategories();
      $scope.newCategory.id = categories[categories.length-1].id + 1;
      categories.push($scope.newCategory);
      localStorageService.set('categories',categories);
      $scope.categories =categoryService.getCategories();
      $scope.newCategory = {};
    }
    $scope.updateClick = function(id){
      $location.path('updateCategory');
      $location.search({'id':id});
    }
});
