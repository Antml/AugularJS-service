angular.module('zhangxiaoyunApp')
  .controller('payCtrl', function ($scope,cart,pay,localStorageService) {

  $scope.cartItems = localStorageService.get('cartItems');
  $scope.price= cart.caculateTotal()+'元';

  $scope.clearCartItems = function(){
    pay.clearCartItems();
  }
});
