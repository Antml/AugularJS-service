angular.module('zhangxiaoyunApp')
   .controller('IndexCtrl',function ($scope,localStorageService,cart){

     $scope.quantity = cart.generateQuantity();


   });
