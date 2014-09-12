angular.module('zhangxiaoyunApp')
    .service('categoryService',function($location,localStorageService){
      var allCategories =[
      {id:0,'name':'水果类'},
      {id:1,'name':'饮料类'},
      {id:2,'name':'零食类'},
      {id:3,'name':'其他类'}
      ]
      this.getCategories = function(){
        var categories = localStorageService.get('categories');
        if(!categories){
          localStorageService.set('categories',allCategories);
          categories = localStorageService.get('categories');
        }
        return categories;
      }
      this.delete = function(category){
        var categories = this.getCategories();
        for (var i=0;i<categories.length;i++){
          if(categories[i].name ===category.name){
            categories=_.without(categories,categories[i]);
            localStorageService.set('categories',categories);
          }
        }
      }
      this.deleteItems = function(category){
        var items = localStorageService.get('items');
        for (var i=0;i<items.length;i++){
          if(items[i].category === category.name){
            items = _.without(items,items[i]);
          }
        }
        localStorageService.set('items',items);
        return items;
      }
      this.addCategory = function(category){
        var categories = this.getCategroies();
        categories.push(category);
        localStorageService.set('categories',categories);
        return categories;
      }
      this.updateClick = function(){
        $location.path('updateCategory');
      }
      this.updateCategory = function(newCategory){
        var categories = this.getCategories();
        for (i=0;i<categories.length;i++){
          if(categories[i].id==newCategory.id){
            categories[i] = newCategory;
          }
        }
        localStorageService.set('categories',categories);
        return categories;
      }
        // // this.updateItems(name,newName);
        // return categories;
        //
      this.updateItems = function(name,newName){
        var items = localStorageService.get('items');
        _.forEach(items,function(item){
          if(item.category ===name)
          item.category = newName;
          localStorageService.set('items',items);
        })
        return items;
      }
      this.getCategoryById = function(id){
        var categories = this.getCategories();
        for (i=0;i<categories.length;i++){
          if(categories[i].id==id){
            return categories[i];
          }
        }
      }
})
