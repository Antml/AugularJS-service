angular.module('zhangxiaoyunApp')
    .service('cart',function(localStorageService){

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

      this.upCart_Num = function(item){
        var cartItems = localStorageService.get("cartItems");
            if (!cartItems){
              cartItems = [];
            }
              for(var i=0; i<cartItems.length; i++){
                  if(cartItems[i].item.name === item.name){
                      cartItems[i].quantity++;
                  }
              }

          localStorageService.set("cartItems", cartItems);
          return cartItems;

        };

      this.downCart_Num = function (item){
          var cartItems = localStorageService.get("cartItems");
              if (!cartItems){
                cartItems = [];
              }
                for(var i=0; i<cartItems.length; i++){
                    if(cartItems[i].item.name === item.name){
                      if (cartItems[i].quantity > 0){
                        cartItems[i].quantity--;
                      }
                      if(cartItems[i].quantity === 0) {
                        var noUse = _.remove(cartItems, function(num){

                            return num.quantity ===0;

                          })
                        // _.without(cartItems,cartItems[i]);
                      }

                    }
                  }
                  localStorageService.set("cartItems", cartItems);
                  return cartItems;
               }

     this.generateQuantity = function(){
        var cartItems = localStorageService.get('cartItems');
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
