angular.module('zhangxiaoyunApp')
    .service('cart',function(){

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

      this.upCart_Num = function(cartItem){
        var cartItems = Localstorage.getLocalstorage("cartItems");
            if (!cartItems){
              cartItems = [];
            }
              for(var i=0; i<cartItems.length; i++){
                  if(cartItems[i].item.name === cartItem.item.name){
                      cartItems[i].quantity++;
                  }
              }

          Localstorage.setLocalstorage("cartItems", cartItems);

        };

      this.downCart_Num = function (cartItem){
          var cartItems = Localstorage.getLocalstorage("cartItems");
              if (!cartItems){
                cartItems = [];
              }
                for(var i=0; i<cartItems.length; i++){
                    if(cartItems[i].item.name === cartItem.item.name){
                      if (cartItems[i].quantity > 0){
                        cartItems[i].quantity--;
                      }
                      if(cartItems[i].quantity === 0) {
                        var noUse = _.remove(cartItems, function(num){

                            return num.quantity ===0;

                          })
                        _.without(cartItems,cartItems[i]);
                      }

                    }
                  }
                  Localstorage.setLocalstorage("cartItems", cartItems);
               }

     this.generateQuantity = function(){
        var cartItems = Localstorage.getLocalstorage('cartItems');
        if (!cartItems){
          cartItems = [];
        }
        var quantity=0;
        for (var i=0;i < cartItems.length;i++){
            quantity += cartItems[i].quantity;
        }
        return quantity;
      };





    });
