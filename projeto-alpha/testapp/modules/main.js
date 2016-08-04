angular.module('starterapp').controller('MainCtrl', function($scope, $mdSidenav, auth) {
    $scope.usuario = auth.getUser();
    
    $scope.toggleMenu = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
        
    $scope.isDeveloper = function() {
        var grupo = auth.getUser().grupo;
        return grupo === 'develop' || grupo === 'admin';
    };    
});
