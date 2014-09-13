describe('cart', function () {
  var cartItems,cartItem;
  beforeEach(function () {
      module('zhangxiaoyunApp');
      inject(function ($injector) {
          cart= $injector.get('cart');
          localStorageService= $injector.get('localStorageService');

      });


  });
  beforeEach(function(){
    cartItems =
    [{item:{category:'饮料类',name:'雪碧',price:3,unit:"罐"},quantity:4},
    {item:{category:'水果类',name:'荔枝',price:15,unit:"斤"},quantity:1}];
  });




  it ('should return right quantity',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);

    var quantity = cart.generateQuantity();
    expect(quantity).toEqual(5);
  });



  it ('should return right result',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);

    var total = cart.caculateTotal();
    expect(total).toEqual(27);
  });

  it ('should increase quantity',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);
    spyOn(localStorageService,'set');

    item = {category:'饮料类',name:'雪碧',price:3,unit:"罐"};

    var cartItemList = cart.upCart_Num(item);
    expect(cartItemList[0].quantity).toEqual(5);
  });

  it ('should reduce quantity ',function(){
    spyOn(localStorageService,'get').andReturn(cartItems);
    spyOn(localStorageService,'set');

    var item1 = {category:'饮料类',name:'雪碧',price:3,unit:"罐"};

    var cartItemList1 = cart.downCart_Num(item1);
    expect(cartItemList1[0].quantity).toEqual(3);

    var item2 = {category:'水果类',name:'荔枝',price:15,unit:"斤"};

    var cartItemList2 = cart.downCart_Num(item2);
    expect(cartItemList2.length).toEqual(1);
  });
})
