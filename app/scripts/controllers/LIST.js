'use strict';

/**
 * @ngdoc function
 * @name zhangxiaoyunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhangxiaoyunApp
 */

angular.module('zhangxiaoyunApp')
   .controller('MyCtrl',function ($scope,List,cart,localStorageService){

    $scope.items = List.getItems();
    $scope.BuyNow  = '立即购买';
    $scope.getItem = function(item){
      List.generateItems(item);
      $scope.$parent.quantity = cart.generateQuantity();
    }



    });
