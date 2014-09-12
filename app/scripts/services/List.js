
angular.module('zhangxiaoyunApp')
    .service('List',function(localStorageService){

        this.getItems = function(){
          //
          // var item1 = {id:0,'category':'饮料类','name':'雪碧','price':3.00,'unit':'罐'};
          // var item2 = {id:1,'category':'水果类','name':'荔枝','price':15.00,'unit':'斤'};
          // var item3 = {id:2,'category':'水果类','name':'苹果','price':5.50,'unit':'斤'};
          // var item4 = {id:3,'category':'零食类','name':'方便面','price':4.50,'unit':'袋'};
          // var item5 = {id:4,'category':'其他类','name':'电池','price':2.00,'unit':'个'};
          // var item6 = {id:5,'category':'其他类','name':'洗发露','price':20.00,'unit':'瓶'};
          // var items = [item1,item2,item3,item4,item5,item6];
          var items = localStorageService.get('items',items);
        //   return [
        //  {category:'饮料类',name:'雪碧',price:3.00,unit:'罐'},
        //  {category:'水果类',name:'荔枝',price:15.00,unit:'斤'},
        //  {category:'水果类',name:'苹果',price:5.50,unit:'斤'},
        //  {category:'零食类',name:'方便面',price:4.50,unit:'袋'},
        //  {category:'其他类',name:'电池',price:2.00,unit:'个'},
        //  {category:'其他类',name:'洗发露',price:20.00,unit:'瓶'}
        //  ];
        return items;
        };

        this.generateItems = function(item){

          var cartItems = localStorageService.get('cartItems');
          if (cartItems === null) {
              cartItems = [];
          }
          var cartItem = this.getUser(cartItems, item.name);
          if (cartItem) {
              cartItem.quantity++;
          }
          else {
              cartItems.push(new CartItem(item,1));
          }

          localStorageService.set('cartItems', cartItems);

          };

        this.getUser = function (cartItems, code) {

              for (var i = 0; i < cartItems.length; i++) {
                  if (code === cartItems[i].item.name) {
                      //cartitem = cartItems[i];
                      return cartItems[i];
                  }
              }
              return false;
          }



    });




//   this.getItem = function (item){
//   var cartItems = Localstorage.getLocalstorage('cartItems');
//   if (cartItems === null) {
//       cartItems = [];
//   }
//   var cartItem = this.getUser(cartItems, item.name);
//   if (cartItem) {
//       cartItem.quantity++;
//   }
//   else {
//       cartItems.push(new CartItem(item,1));
//   }
//
//   Localstorage.setLocalstorage('cartItems', cartItems);
//   $scope.$parent.quantity = generateQuantity();
//   };
//
//   this.getUser = function(cartItems, code){
//
//       for (var i = 0; i < cartItems.length; i++) {
//           if (code === cartItems[i].item.name) {
//               //cartitem = cartItems[i];
//               return cartItems[i];
//           }
//       }
//       return false;
//   };
