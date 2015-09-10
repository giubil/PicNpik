angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

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
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('LeaderboardCtrl', function ($scope) {
    $scope.leaderboardPic = [
        { image: 'catOnBoobs.jpg', description: '1.Can on Boobies', star_number: 500 },
        { image: 'pandaPlaying.jpg', description: '2.Panda Driving', star_number: 45 },
        { image: 'englishMuffin.jpg', description: '3.English Muffin', star_number: 35 },
        { image: 'sharkFlying.png', description: '4.Shark Flying', star_number: 30 },
        { image: 'ionic.png', description: '5.Ionic', star_number: 20 }
    ];
    $scope.leaderboardPpl = [
        { image: 'redHeadSmilng.jpg', description: '1.Red Head', star_number: 850 },
        { image: 'jean_kevin.jpg', description: '2.Jean Kevin', star_number: 790 },
        { image: 'moritz.jpg', description: '3.Moritz', star_number: 785 },
        { image: 'uglyWoman.jpg', description: '4.Ugly Woman', star_number: 770 },
        { image: 'blackGuy.jpg', description: '5.Black Guy', star_number: 755 }
    ];
})

.controller('AccountCtrl', function ($scope) {
    $scope.users = [
        { image: 'jean_kevin.jpg', description: '1', star_number: 25 },
        { image: 'jean_kevin.jpg', description: '2je suce des queus', star_number: 26 },
        { image: 'jean_kevin.jpg', description: '3je suce des queus', star_number: 27 },
        { image: 'jean_kevin.jpg', description: '4je suce des queus', star_number: 28 },
        { image: 'jean_kevin.jpg', description: '5je suce des queus', star_number: 29 },
        { image: 'jean_kevin.jpg', description: '6je suce des queus', star_number: 30 },
        { image: 'jean_kevin.jpg', description: '7je suce des queus', star_number: 31 },
        { image: 'jean_kevin.jpg', description: '8je suce des queus', star_number: 32 },
        { image: 'jean_kevin.jpg', description: '9je suce des queus', star_number: 33 },
        { image: 'jean_kevin.jpg', description: '10je suce des queus', star_number: 34 }
    ];
})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 },
      { title: 'GROSSE BITE', id: 7 }
    ];
})

.controller('UserCtrl', function ($scope   ) {
    $scope.leaderboard = [
        { image: 'jean_kevin.jpg', name: 'Jean-caca', id: 1 },
        { image: 'jean_kevin.jpg', name: 'Jean-kevin', id: 2 },
        { image: 'jean_kevin.jpg', name: 'Jean-kevin', id: 3 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
});
