'use strict';

angular.module('myApp.photography', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/photography', {
      templateUrl: 'pages/photography/photography.html',
      controller: 'PhotographyCtrl'
    });
  }])

  .controller('PhotographyCtrl', ['$scope', function ($scope) {


  

    $scope.images = [
      { "src": "img/photography/gradient_sky.jpg", "alt": "Light gradiant in the sky" },
      { "src": "img/photography/snow_at_night.jpg", "alt": "Snow at Night" },
      { "src": "img/photography/blue_tree.jpg", "alt": "Tree with blue light" },
      { "src": "img/photography/sunset.jpg", "alt": "Sunset Closeup" },
      { "src": "img/photography/clouds.jpg", "alt": "Clouds" },
      { "src": "img/photography/medow.jpg", "alt": "Medow" },
      { "src": "img/photography/purple_sky.jpg", "alt": "Purple Sky" },
      { "src": "img/photography/tree_park.jpg", "alt": "Tree in a park" },
      { "src": "img/photography/bicycle_in_park.jpg", "alt": "Bicycle in a Park" },
      { "src": "img/photography/beach_sunset.jpg", "alt": "Sunset at the Beach" },
      { "src": "img/photography/marsh.jpg", "alt": "Marsh" },
      { "src": "img/photography/plants_near_lake.jpg", "alt": "Plants near Lake" },
      { "src": "img/photography/tree_closeup.jpg", "alt": "Tree Closeup" },
      { "src": "img/photography/dark_sky_night.jpg", "alt": "Dark Sky During Night" },
      { "src": "img/photography/clouds_building.jpg", "alt": "Clouds over a building" },
      { "src": "img/photography/blue_sunset.jpg", "alt": "Blue Sunset" }
    ];

    $scope.activePic = function ($index) {
    
      $scope.activeImg = $scope.images[$index];

    };

  }]);