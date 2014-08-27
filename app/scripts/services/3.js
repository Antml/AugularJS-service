angular.module('zhangxiaoyunApp')
    .service('pay',function(){


this.caculateTotal = function(){
  var total = 0;
  var cartItems =Localstorage.getLocalstorage('cartItems');
  if (!cartItems){
  cartItems = [];
  }

  for (var i=0;i<cartItems.length;i++){
    total += cartItems[i].quantity*cartItems[i].item.price;
  }
    return total;
};

});
