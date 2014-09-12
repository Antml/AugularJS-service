angular.module('zhangxiaoyunApp')
    .service('pay',function(localStorageService){


this.caculateTotal = function(){
  var total = 0;
  var cartItems =localStorageService.get('cartItems');
  if (!cartItems){
  cartItems = [];
  }

  for (var i=0;i<cartItems.length;i++){
    total += cartItems[i].quantity*cartItems[i].item.price;
  }
    return total;
};

this.clearCartItems= function(){
  var cartItems = localStorageService.get("cartItems");
      if (!cartItems){
        cartItems = [];
      }
      var noUse = _.remove(cartItems, function(cartItem){

          return cartItem;

        });
    localStorageService.set("cartItems", cartItems);
};

});
