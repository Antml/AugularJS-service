angular.module('zhangxiaoyunApp')
  .controller('payCtrl', function ($scope, $location,pay) {

$scope.cartItems = Localstorage.getLocalstorage('cartItems');
$scope.price= function (){
  pay.caculateTotal();
}
  });
