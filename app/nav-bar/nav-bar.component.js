angular.module('myApp.navBar').component('navBar', {
  templateUrl: 'nav-bar/nav-bar.html',
  controller: function NavBarController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}
  });
  