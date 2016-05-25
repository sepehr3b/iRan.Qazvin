// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','prr.controllers','ngCordova','alert'])




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if(window.Connection) {

      if(navigator.connection.type == Connection.NONE) {
        alert('شبکه در دسترس نیست!');
      }else{
        alert('شما در حال استفاده از'+' '+ navigator.connection.type+' '+'هستید.');
      }
    }else{
      alert('شبکه پیدا نشد!');
    }


    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      window.cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.backButton.text('بازگشت').icon('ion-android-arrow-dropleft-circle');
        $ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.scrolling.jsScrolling(false);


    })


.config(function($stateProvider, $urlRouterProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.info', {
    url: '/info',
    views: {
      'tab-info': {
        templateUrl: 'templates/tab-info.html',
        controller: 'infoCtrl'
      }
    }
  })

  .state('tab.places', {
      url: '/places',
      views: {
        'tab-places': {
          templateUrl: 'templates/tab-places.html',
          controller: 'placesCtrl'
        }
      }
    })
    .state('tab.place-detail', {
      url: '/places/:placeId',
      views: {
        'tab-places': {
          templateUrl: 'templates/place-detail.html',
          controller: 'placeDetailCtrl'
        }
      }
    })
  .state('tab.help', {
    url: '/help',
    views: {
      'tab-help': {
        templateUrl: 'templates/tab-help.html',
        controller: 'helpCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/info');

});
