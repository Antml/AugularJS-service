describe('1', function () {
  var List,inputs;
  beforeEach(function () {
      module('zhangxiaoyunApp');
      inject(function ($injector) {
          List= $injector.get('List');
      });



  });
  beforeEach(function(){
    inputs = [[{category:'饮料类',name:'雪碧',price:3.00,unit:'罐'}],
            [{category:'水果类',name:'荔枝',price:15.00,unit:'斤'}],
            [{category:'其他类',name:'电池',price:2.00,unit:'个'}]
            ]
          })
          
  it ('should return right itemlist', function(){
      var allItems = List.getItems();
      for (i=0;i<allItems.length;i++){
        inputs[0]
      }

  });
});
