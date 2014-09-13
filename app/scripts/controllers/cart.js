'use strict';

/**
 * @ngdoc function
 * @name zhangxiaoyunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhangxiaoyunApp
 */
angular.module('zhangxiaoyunApp')
    .controller('cartCtrl', function ($scope, $location,cart,localStorageService) {

    $scope.cartItems = localStorageService.get('cartItems');
    $scope.price= cart.caculateTotal()+'元';


  $scope.downCart_Num = function(item){
    cart.downCart_Num(item);
    $scope.cartItems = localStorageService.get('cartItems');
    $scope.$parent.quantity = cart.generateQuantity();
    $scope.price= cart.caculateTotal();
  };

  $scope.upCart_Num = function(item){
    cart.upCart_Num(item);
    $scope.cartItems = localStorageService.get('cartItems');
    $scope.$parent.quantity = cart.generateQuantity();
    $scope.price= cart.caculateTotal();
  };
  
  $scope.changetopay=function(){
    $location.path('pay');
};
  });
