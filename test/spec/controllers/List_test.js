'use strict';

describe('Controller:MyCtrl',function(){
  var $scope,List,cart,creatContorller;

  beforeEach(function(){
    module('zhangxiaoyunApp');

    inject(function($injector){

      $scope = $injector.get('$rootScope').$new();
      List = $injector.get('List');
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

  it('should emit to parent controller when come in list',function(){
    spyOn($scope,'$emit');
    creatController();
    expect($scope.$emit).toHaveBeenCalledWith('to-parent-incart');
  });

  it('should return all items',function(){
    spyOn(List,'getItems');
    creatController();
    var allItems = List.getItems();
    expect($scope.items).toEqual(result);
  });

  it('should call generateItems in List',function(){
    spyOn(List,'generateItems');
    var item = {category:'饮料类',name:'雪碧',price:3,unit:"罐"};

    $scope.getItem(item);
    expect(List.generateItems).toHaveBeenCalledWith(item);
  });;


})
