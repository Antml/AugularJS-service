'use strict';

describe('Controller:MyCtrl',function(){
  var $scope,List,cart,creatContorller;

  beforeEach(function(){
    module('zhangxiaoyunApp');

    inject(function($injector){

      $scope = $injector.get('$rootScope').$new();
      cart = $injector.get('cart');

      var $controller = $injector.get('$contorller');

      creatController = function(){
        return $controller('MyCtrl',{
          $scope: $scope,
          List: List,
          cart:cart
        });
      };

    });

    creatController();

  });

  it('should return right quantity',function(){
    spyOn(cart,'generatequantity').andReturn(10);
    creatController();
    expect($scope.quantity).toEqual(10);
    expect(cart.generatequantity).HaveBeenCalled();
  });

})
