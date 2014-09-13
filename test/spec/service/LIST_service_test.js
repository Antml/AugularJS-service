describe('List', function () {
  var List,inputs,Items,cartItem;
  beforeEach(function () {
      module('zhangxiaoyunApp');
      inject(function ($injector) {
          List= $injector.get('List');
          localStorageService= $injector.get('localStorageService');
      });


  });
  beforeEach(function(){
    inputs = [{category:'饮料类',name:'雪碧',price:3.00,unit:'罐'},
              {category:'水果类',name:'荔枝',price:15.00,unit:'斤'},
              {category:'其他类',name:'电池',price:2.00,unit:'个'}
            ];
     Items = List.getItems();
     cartItem = [{'item':{category:'饮料类',name:'雪碧',price:3.00,unit:'罐'},'quantity':1}];

  });

  it ('should return right count', function(){

    expect(Items.length).toEqual(6);

  });

  it ('should return right Content',function(){


    var num = 0;
      for (i=0;i<Items.length;i++){
        for (j=0;j<inputs.length;j++){
          if (Items[i].name === inputs[j].name){
            num = num + 1;
    }
  }
}
      expect(num).toEqual(3);
  });

  it ('should return right result',function(){

    var result1 = List.getUser(cartItem,'雪碧');
    expect(result1.item.name).toEqual('雪碧');
    var result2 = List.getUser(cartItem,'方便面');
    expect(result2).toEqual(false);

  });

  it('should storage cartItems',function(){
    spyOn(localStorageService,'get').andReturn(null);
    spyOn(List,'getUser').andReturn(false);
    List.generateItems({category:'饮料类',name:'雪碧',price:3.00,unit:'罐'});

    var cartItems = localStorageService.get('cartItems');
    expect(cartItems[0].item.name).toEqual('雪碧');
    expect(cartItems[0].quantity).toEqual(1);
  });

  it('should storage cartItems',function(){
     spyOn(localStorageService,'get').andReturn([{"item":{"category":"饮料类","name":"雪碧","price":3,"unit":"罐"},"quantity":3}]);
     spyOn(List,'getUser').andReturn([{"item":{"category":"饮料类","name":"雪碧","price":3,"unit":"罐"},"quantity":3}]);
     List.generateItems({category:'饮料类',name:'雪碧',price:3.00,unit:'罐'});

     var cartItems = localStorageService.get('cartItems');
     expect(cartItems[0].item.name).toEqual('雪碧');
     expect(cartItems[0].quantity).toEqual(4);
  });

  it('should storage cartItems',function(){
     spyOn(localStorageService,'get').andReturn([{"item":{"category":"饮料类","name":"雪碧","price":3,"unit":"罐"},"quantity":3}]);
     spyOn(List,'getUser').andReturn(false);
     List.generateItems({category:'水果类',name:'荔枝',price:15.00,unit:'斤'});

     var cartItems = localStorageService.get('cartItems');
     expect(cartItems[1].item.name).toEqual('荔枝');
     expect(cartItems[1].quantity).toEqual(1);
  });


});
