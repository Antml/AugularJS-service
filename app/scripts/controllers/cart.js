'use strict';

/**
 * @ngdoc function
 * @name zhangxiaoyunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhangxiaoyunApp
 */
angular.module('zhangxiaoyunApp')
    .controller('cartCtrl', function ($scope, $location,cart) {

    $scope.cartItems = Localstorage.getLocalstorage('cartItems');
    $scope.price= cart.caculateTotal();


  $scope.downCart_Num = function(cartItem){
    cart.downCart_Num(cartItem);
    $scope.cartItems = Localstorage.getLocalstorage('cartItems');
    $scope.$parent.quantity = cart.generateQuantity();
    $scope.price= cart.caculateTotal();

  };
  $scope.upCart_Num = function(cartItem){
    cart.upCart_Num(cartItem);
    $scope.cartItems = Localstorage.getLocalstorage('cartItems');
      $scope.$parent.quantity = cart.generateQuantity();
      $scope.price= cart.caculateTotal();
  };
$scope.changetopay=function(){
  $location.path('pay');
};
  });
