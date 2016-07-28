angular.module('starterapp')
.controller('MainCtrl', function($scope, $mdSidenav, auth) {
    $scope.toggleMenu = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    
    $scope.isDeveloper = function() {
        return auth.getUser().grupo === 'develop';
    };
});
