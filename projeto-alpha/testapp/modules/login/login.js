angular.module('starterapp').controller('LoginCtrl', function($scope, $state, auth) {
    $scope.usuario = {};
    
    $scope.login = function() {
        auth.authorize($scope.usuario, function(err) {
            if (err) {
                console.log(err);
                return;
            }
            $state.go('app.home');
        });
    };
});