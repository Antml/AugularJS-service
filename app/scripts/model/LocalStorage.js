/**
 * Created by zhangyun on 14-8-18.
 */

function Localstorage(){

}
Localstorage.getLocalstorage = function(key){

    var value = JSON.parse(localStorage.getItem(key));
    return value;
};

Localstorage.setLocalstorage = function(key, value){

    localStorage.setItem(key,JSON.stringify(value));
};
