angular.module('zhangxiaoyunApp')
    .service('contactService',function($location,localStorageService){
      var uid = 6;
      var allItems =[
                {id:0,'category':'饮料类','name':'雪碧','price':3.00,'unit':'罐'},
                {id:1,'category':'水果类','name':'荔枝','price':15.00,'unit':'斤'},
                {id:2,'category':'水果类','name':'苹果','price':5.50,'unit':'斤'},
                {id:3,'category':'零食类','name':'方便面','price':4.50,'unit':'袋'},
                {id:4,'category':'其他类','name':'电池','price':2.00,'unit':'个'},
                {id:5,'category':'其他类','name':'洗发露','price':20.00,'unit':'瓶'},
                ]
      this.set = function(){
          var items = localStorageService.get('items');
          if(!items){
            localStorageService.set('items',allItems);
            items = localStorageService.get('items');
          }
          return items;
      }

      this.removeItem = function(name){
        var items = localStorageService.get('items');
        for(var i=0;i<items.length;i++){
          if (items[i].name===name){
            items = _.without(items,items[i]);
          }
        }
        localStorageService.set('items',items);
        return items;

      }
      this.saveItem = function(item){
        var items = localStorageService.get('items');
        items.push(item);
        localStorageService.set('items',items);
        return items;
      }
      this.updateclick = function(){
        $location.path('update');
      }
      // this.get = function(name){
      //   var readyUpdate = localStorageService.get('readyUpdate');
      //   if(!readyUpdate){
      //     readyUpdate = [];
      //   }
      //   var items = localStorageService.get('items');
      //   for(var i=0;i<items.length;i++){
      //     if (items[i].name === name){
      //       readyUpdate.push(items[i]);
      //       localStorageService.set('readyUpdate',readyUpdate);
      //     }
      //   }
      // }
      this.get = function(id){
        var items = localStorageService.get('items');
        for (i=0;i<items.length;i++){
          if(items[i].id==id){
            return items[i];
          }
        }
      }
      this.updateItems = function(input){
        var items = localStorageService.get('items');
        var info = input.id;
        for (var i=0;i<items.length;i++){
          if(items[i].id ===info){
            items[i] = input;
          }
        }
        localStorageService.set('items',items);
        return items;
      }
});
