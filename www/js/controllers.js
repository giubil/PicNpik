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

.controller('LeaderboardCtrl', function ($scope) {
    $scope.leaderboard = [
        { imagePic: 'catOnBoobs.jpg', descriptionPic: '1.Can on Boobies', star_numberPic: 500, imagePpl: 'redHeadSmilng.jpg', descriptionPpl: '1.Red Head', star_numberPpl: 850 },
        { imagePic: 'pandaPlaying.jpg', descriptionPic: '2.Panda Driving', star_numberPic: 45, imagePpl: 'jean_kevin.jpg', descriptionPpl: '2.Jean Kevin', star_numberPpl: 790 },
        { imagePic: 'englishMuffin.jpg', descriptionPic: '3.English Muffin', star_numberPic: 35, imagePpl: 'moritz.jpg', descriptionPpl: '3.Moritz', star_numberPpl: 785 },
        { imagePic: 'sharkFlying.png', descriptionPic: '4.Shark Flying', star_numberPic: 30, imagePpl: 'uglyWoman.jpg', descriptionPpl: '4.Ugly Woman', star_numberPpl: 770 },
        { imagePic: 'ionic.png', descriptionPic: '5.Ionic', star_numberPic: 20, imagePpl: 'blackGuy.jpg', descriptionPpl: '5.Black Guy', star_numberPpl: 755 }
    ];
})

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
