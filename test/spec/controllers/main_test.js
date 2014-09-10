'use strict';

describe('Controller:MainCtrl',function(){
  var $location,$scope,creatContorller;

  beforeEach(function(){
    module('zhangxiaoyunApp');

    inject(function($injector){
      $location=$injector.get('$location');
      $scope = $injector.get('$rootScope').$new();

      var $controller = $injector.get('$contorller');

      creatController = function(){
        return $controller('MainCtrl',{
          $location:$location,
          $scope: $scope

        });
      };

    });

    creatController();

  });
  it('should come into list',function(){
    creatController();
    $scope.changetolist();
    expect($location.path()==='/LIST').toBe(true);
  })

})
