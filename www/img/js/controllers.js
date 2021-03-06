angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
                   //         <img class="full-image" src="{{user.image}}" />
                   //     <p>{{user.desciption}}</p>
                    //    <a href="#" class="subdued">{{user.star_number}} <i class="icon ion-star"></i></a>

.controller('AccountCtrl', function ($scope) {
    $scope.users = [
        { image: 'jean_kevin.jpg', description: '1je suce des queus', star_number: 25 },
        { image: 'jean_kevin.jpg', description: '2je suce des queus', star_number: 26 },
        { image: 'jean_kevin.jpg', description: '3je suce des queus', star_number: 27 },
        { image: 'jean_kevin.jpg', description: '4je suce des queus', star_number: 28 }
    ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'GROSSE BITE', id: 7}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
