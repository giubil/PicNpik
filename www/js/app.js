// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    //leaderboard special menu

    .state('leader', {
        url: '/leader',
        abstract: true,
        templateUrl: 'templates/leaderMenu.html',
        controller: 'UserCtrl'
    })


    .state('leader.single', {
        url: '/leaderboard/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/user.html',
                controller: 'UserCtrl'
            }
        }
    })

    .state('leader.user', {
        url: '/user',
        //view: {
//            'menuContent': {
                templateUrl: 'templates/leader_user.html'
  //          }
        //}
    })

        //app in general

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.leaderboard', {
        url: '/leaderboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/leaderboard.html',
                controller: 'LeaderboardCtrl',
            }
        }
    })

    /*.state('app.user', {
        url: '/user',
        views: {
            'menuContent': {
                templateUrl: 'templates/leader_user.html'
    }
        }
    })*/

    .state('app.battle', {
        url: '/battle',
        views: {
            'menuContent': {
                templateUrl: 'templates/battle.html'
            }
        }
    })
      .state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'PlaylistsCtrl'
              }
          }
      })

      .state('app.account', {
          url: '/account',
          views: {
              'menuContent': {
                  templateUrl: 'templates/my_account.html',
                  controller: 'AccountCtrl'
              }
          }
      })

        .state('homepage', {
            url: '/homepage',
            templateUrl: 'templates/homepage.html'
        })

        

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/battle');
});
