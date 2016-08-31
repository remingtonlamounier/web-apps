angular.module('starterapp').controller('LoginCtrl', function($scope, $state, $mdToast, auth) {
    $scope.usuario = {};
    
    $scope.login = function() {
        auth.authorize($scope.usuario, function(err) {
            if (!err) {
                $state.go('app.home');
                return;
            }
            
            $mdToast.show(
                $mdToast.simple()
                    .textContent(err)
                    .position('bottom center')
                    .hideDelay(5000)
            );
        });
    };
});