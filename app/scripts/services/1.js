// app.service('Localstorage', function(){
//
//     Localstorage.getLocalstorage = function(key){
//
//         var value = JSON.parse(localStorage.getItem(key));
//         return value;
//     };
//
//     Localstorage.setLocalstorage = function(key, value){
//
//         localStorage.setItem(key,JSON.stringify(value));
//     };
//
//
// });
angular.module('zhangxiaoyunApp')
    .service('List',function(){

        this.getItems = function(){
          return [
          {category:'饮料类',name:'雪碧',price:3.00,unit:'罐'},
          {category:'水果类',name:'荔枝',price:15.00,unit:'斤'},
          {category:'水果类',name:'苹果',price:5.50,unit:'斤'},
          {category:'零食类',name:'方便面',price:4.50,unit:'袋'},
          {category:'其他类',name:'电池',price:2.00,unit:'个'},
          {category:'其他类',name:'洗发露',price:20.00,unit:'瓶'}
          ];
        };

        this.generateItems = function(item){

          var cartItems = Localstorage.getLocalstorage('cartItems');
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

          Localstorage.setLocalstorage('cartItems', cartItems);

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
