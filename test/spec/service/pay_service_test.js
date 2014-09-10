describe('pay', function () {
  var cartItems;
  beforeEach(function () {
      module('zhangxiaoyunApp');
      inject(function ($injector) {
          pay= $injector.get('pay');
          localStorageService= $injector.get('localStorageService');
      });
    });


  beforeEach(function(){
    cartItems =
    [{item:{category:'饮料类',name:'雪碧',price:3,unit:"罐"},quantity:4},
    {item:{category:'水果类',name:'荔枝',price:15,unit:"斤"},quantity:3}];

  });

  it('should clear cartItems',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);
    spyOn(localStorageService,'set');

    pay.clearCartItems();
    var cart = Localstorage.getLocalstorage("cartItems");
    expect(cart.length).toEqual(0);
  });

  it ('should return right result',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);

    var total = cart.caculateTotal();
    expect(total).toEqual(27);
  });


});
