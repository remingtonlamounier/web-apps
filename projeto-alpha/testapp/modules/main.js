angular.module('starterapp')
.controller('MainCtrl', function($scope, $mdSidenav, $state) {
    $scope.toggleMenu = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    
    $scope.goTo = function(state) {
        $state.go(state);
    };
});
