'use strict';

describe('Controller:payCtrl',function(){
  var $location,$scope,pay,cart,creatContorller;

  beforeEach(function(){
    module('zhangxiaoyunApp');

    inject(function($injector){

      $scope = $injector.get('$rootScope').$new();
      cart = $injector.get('cart');
      pay = $injector.get('pay')

      var $controller = $injector.get('$contorller');

      creatController = function(){
        return $controller('payCtrl',{
          $scope: $scope,
          pay: pay,
          cart:cart
        });
      };

    });

    creatController();

  });

  it('should return right price',function(){
    spyOn(cart,'caculateTotal').andReturn(100);
    expect($scope.price).toEqual(100);
  });

  it('should call clearCartItems in payService when click button',fuction(){
    spyOn(pay,'clearCartItems');
    spyOn($scope,'$emit');
    $scope.clearCartItems();
    expect(pay.clearCartItems).toHaveBeenCalled();
  })

})
