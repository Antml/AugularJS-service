'use strict';

describe('Controller:MyCtrl',function(){
  var $location,$scope,cart,creatContorller;

  beforeEach(function(){
    module('zhangxiaoyunApp');

    inject(function($injector){
      $location=$injector.get('$location');
      $scope = $injector.get('$rootScope').$new();
      cart = $injector.get('cart');

      var $controller = $injector.get('$contorller');

      creatController = function(){
        return $controller('cartCtrl',{
          $location:$location,
          $scope: $scope,
          cart:cart
        });
      };

    });

    var cartItems = [{item:{category:'饮料类',name:'雪碧',price:3,unit:"罐"},quantity:4},
    {item:{category:'水果类',name:'荔枝',price:15,unit:"斤"},quantity:1}];

    creatController();

  });



  it('should call get in localStorageService',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);
    createController();

    expect($scope.cartItems).toEqual(cartItems);
  })

  it('should return right price',function(){
    spyOn(cart,'caculateTotal').andReturn(100);
    createController();
    expect($scope.price).toEqual(100);
    expect(cart.caculateTotal).toHaveBeenCalled();
  });

  describe('when click Up',function(){

    it('should call upCart_Num in cart',function(){
      spyOn(cart,'upCart_Num');
      var cartItem = {item:{category:'水果类',name:'荔枝',price:15,unit:"斤"},quantity:1};
      $scope.upCart_Num(cartItem.item);
      expect(cartItem.quantity).toEqual(2);
    });

    it('should call caculateTotal in cart',function(){
      spyOn(cart,'upCart_Num');
      spyOn(cart,'caculateTotal');
      var cartItem = {item:{category:'水果类',name:'荔枝',price:15,unit:"斤"},quantity:1};
      $scope.upCart_Num(cartItem.item);
      expect(cart.caculateTotal).toHaveBeenCalled();
    });
  });

  describe('when click down',function(){
    it ('should call downCart_Num in cart',function(){
      spyOn(cart,'downCart_Num');
      var cartItem = {item:{category:'饮料类',name:'雪碧',price:3,unit:"罐"},quantity:4};
      $scope.downCart_Num(cartItem);
      expect(cart.downCart_Num).toHaveBeenCalled();
    });

    it('should call caculateTotal in cart',function(){
      spyOn(cart,'downCart_Num');
      spyOn(cart,'caculateTotal');
      var cartItem = {item:{category:'水果类',name:'荔枝',price:15,unit:"斤"},quantity:1};
      $scope.downCart_Num(cartItem.item);
      expect(cart.caculateTotal).toHaveBeenCalled();
    });
  });

  describe('when click pay',function(){
    it('should come into pay',function(){
      creatController();
      $scope.changetopay();
      expect($location.path()==='/pay').toBe(true);
    });
  });
})
