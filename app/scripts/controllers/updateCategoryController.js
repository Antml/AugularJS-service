angular.module('zhangxiaoyunApp')
  .controller('updateCategoryCtrl', function ($scope,$location,localStorageService,categoryService,contactService) {
    var id = $location.search().id;
    $scope.newCategory = categoryService.getCategoryById(id);
    $scope.updateCategory = function(){
      categoryService.updateCategory($scope.newCategory);
      $scope.newCategory = {};
    }
});
