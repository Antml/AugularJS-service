'use strict';

/**
 * @ngdoc overview
 * @name zhangxiaoyunApp
 * @description
 * # zhangxiaoyunApp
 *
 * Main module of the application.
 */
angular
  .module('zhangxiaoyunApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/LIST', {
        templateUrl: 'views/LIST.html',
        controller: 'MyCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl'
      })
      .when('/index', {
        templateUrl: 'index.html',
        controller: 'IndexCtrl'
      })
      .when('/pay', {
        templateUrl: 'views/pay.html',
        controller: 'payCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
