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

.controller('LeaderboardCtrl', function ($scope, $stateParams, Playlists, LeaderLists) {
    $scope.user = Playlists.get($stateParams.playlistId);
    $scope.leaderboardPic = LeaderLists.get($stateParams.playlistId, 1);
    $scope.leaderboardPpl = LeaderLists.get($stateParams.playlistId, 2);
    console.log($scope.leaderboardPic);
    console.log($scope.leaderboardPpl);
    /*$scope.leaderboardPic = [
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
    ];*/
})

.controller('AccountCtrl', function ($scope) {
    $scope.users = [
        { image: 'blackGuy.jpg', description: 'Funny dude', star_number: 50 },
        { image: 'jean_kevin.jpg', description: 'COD4EVAH', star_number: 46 },
        { image: 'uglyWoman.jpg', description: 'Hello', star_number: 27 },
        { image: 'redHeadSmilng.jpg', description: '...', star_number: 12 }
    ];

    $scope.creation = function () {
        var but = document.getElementById("creation");
        var but2 = document.getElementById("favoris");
        but2.style.backgroundColor = "#f8f8f8";
        but.style.backgroundColor = "#FFECB3";


        $scope.users[0].image = 'blackGuy.jpg';
        $scope.users[1].image = 'jean_kevin.jpg';
        $scope.users[2].image = 'uglyWoman.jpg';
        $scope.users[3].image = 'redHeadSmilng.jpg';

        $scope.users[0].description = 'Funny dude';
        $scope.users[1].description = 'COD4EVAH';
        $scope.users[2].description = 'Hello';
        $scope.users[3].description = '...';

        $scope.users[0].star_number = 50;
        $scope.users[1].star_number = 46;
        $scope.users[2].star_number = 27;
        $scope.users[3].star_number = 12;

    };

    $scope.favoris = function () {
        var but = document.getElementById("creation");
        var but2 = document.getElementById("favoris");
        but.style.backgroundColor = "#f8f8f8";
        but2.style.backgroundColor = "#FFECB3";


        $scope.users[0].image = 'img1.jpg';
        $scope.users[1].image = 'img2.jpg';
        $scope.users[2].image = 'img3.jpg';
        $scope.users[3].image = 'img4.jpg';

        $scope.users[0].description = 'best flash cosplayer';
        $scope.users[1].description = 'funny monkey';
        $scope.users[2].description = 'fail tatoo';
        $scope.users[3].description = 'awesome dog';

        $scope.users[0].star_number = 10;
        $scope.users[1].star_number = 7;
        $scope.users[2].star_number = 4;
        $scope.users[3].star_number = 2;
    };
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

 .controller('UserCtrl', function ($scope, Playlists) {
     $scope.leaderboard = Playlists.all();
 })

 .controller('BattleCtrl', function ($scope) {

     var vari = 0;
     var leftimg = document.getElementById("leftimg");
     var rightimg = document.getElementById("rightimg");

     $scope.onimgclick = function () {
         vari++;
         if (vari % 3 == 0)
         {
             leftimg.src = "img/img2.jpg";
             rightimg.src = "img/img4.jpg";
         }
         else if (vari % 3 == 1)
         {
             leftimg.src = "img/img1.jpg";
             rightimg.src = "img/img3.jpg";
         }
         else
         {
             leftimg.src = "img/catOnBoobs.jpg";
             rightimg.src = "img/pandaPlaying.jpg";
         }
     };
 })

  .controller('LeaderCtrl', function ($scope, $stateParams, Playlists) {
      $scope.user = Playlists.get($stateParams.playlistId);
  })


  .factory('LeaderLists', function () {
      var listsPics = [
          [
            { image: 'catOnBoobs.jpg', description: '1.Cat on Boobies', star_number: 500 },
            { image: 'pandaPlaying.jpg', description: '2.Panda Driving', star_number: 45 },
            { image: 'englishMuffin.jpg', description: '3.English Muffin', star_number: 35 },
            { image: 'sharkFlying.png', description: '4.Shark Flying', star_number: 30 },
            { image: 'ionic.png', description: '5.Ionic', star_number: 20 }],
            [{ image: 'ionic.png', description: '1.Ionic', star_number: 20 },
            { image: 'sharkFlying.png', description: '2.Shark Flying', star_number: 30 },
            { image: 'englishMuffin.jpg', description: '3.English Muffin', star_number: 35 },
            { image: 'pandaPlaying.jpg', description: '4.Panda Driving', star_number: 45 },
            { image: 'catOnBoobs.jpg', description: '5.Cat on Boobies', star_number: 500 }],
            [{ image: 'englishMuffin.jpg', description: '1.English Muffin', star_number: 35 },
            { image: 'catOnBoobs.jpg', description: '2.Cat on Boobies', star_number: 500 },
            { image: 'sharkFlying.png', description: '3.Shark Flying', star_number: 30 },
            { image: 'pandaPlaying.jpg', description: '4.Panda Driving', star_number: 45 },
            { image: 'ionic.png', description: '5.Ionic', star_number: 20 }]];
      var listsUser = [
            [{ image: 'blackGuy.jpg', description: '1.Black Guy', star_number: 755 },
            { image: 'uglyWoman.jpg', description: '2.Ugly Woman', star_number: 770 },
            { image: 'moritz.jpg', description: '3.Moritz', star_number: 785 },
            { image: 'jean_kevin.jpg', description: '4.Jean Kevin', star_number: 790 },
            { image: 'redHeadSmilng.jpg', description: '5.Red Head', star_number: 850 }],
            [{ image: 'redHeadSmilng.jpg', description: '1.Red Head', star_number: 850 },
            { image: 'jean_kevin.jpg', description: '2.Jean Kevin', star_number: 790 },
            { image: 'moritz.jpg', description: '3.Moritz', star_number: 785 },
            { image: 'uglyWoman.jpg', description: '4.Ugly Woman', star_number: 770 },
            { image: 'blackGuy.jpg', description: '5.Black Guy', star_number: 755 }],
            [{ image: 'uglyWoman.jpg', description: '1.Ugly Woman', star_number: 770 },
            { image: 'redHeadSmilng.jpg', description: '2.Red Head', star_number: 850 },
            { image: 'jean_kevin.jpg', description: '3.Jean Kevin', star_number: 790 },
            { image: 'blackGuy.jpg', description: '4.Black Guy', star_number: 755 },
            { image: 'moritz.jpg', description: '5.Moritz', star_number: 785 }]];

      return {
          all: function () {
              return 0;
          },
          get: function (listId, yolo) {
              if (yolo == 1)
                  return listsPics[listId];
              else
                  return listsUser[listId];
          }
      }
  })

  .factory('Playlists', function () {
      var playlists = [
        { name: 'Geek', id: 0 },
        { name: 'Cute', id: 1 },
        { name: 'Animals', id: 2 }
      ];

      return {
          all: function () {
              return playlists;
          },
          get: function (playlistId) {
              // Simple index lookup
              return playlists[playlistId];
          }
      }
  });
