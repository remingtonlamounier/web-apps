angular.module('starterapp').controller('MainCtrl', function($scope, $mdSidenav, auth) {
    $scope.usuario = auth.getUser();
    
    $scope.userRole = function() {
        return $scope.usuario.grupo;
    };
    
    $scope.toggleMenu = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
});
