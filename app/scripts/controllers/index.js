angular.module('zhangxiaoyunApp')
   .controller('IndexCtrl',function ($scope){

     $scope.quantity = generateQuantity();
    //  $scope.quantity = 0;


   });

function generateQuantity(){
  var cartItems = Localstorage.getLocalstorage('cartItems');
  if (!cartItems){
    cartItems = [];
  }
  var quantity=0;
  for (var i=0;i < cartItems.length;i++){
      quantity += cartItems[i].quantity;
  }
  return quantity;
}
