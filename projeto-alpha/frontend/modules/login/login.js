angular.module('starterapp').controller('LoginCtrl', function($scope, $state, $stateParams, $mdToast, auth) {
    $scope.usuario = {};
    
    if ($stateParams.unAuthorized) {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Sua sessão expirou ou você não tem permissão para acessar a página solicitada')
                .position('top center')
                .hideDelay(5000)
        );
    }
    
    $scope.login = function() {
        auth.authorize($scope.usuario, function(err) {
            if (!err) {
                $state.go('app.home');
                return;
            }
            
            $mdToast.show(
                $mdToast.simple()
                    .textContent(err)
                    .position('top center')
                    .hideDelay(5000)
            );
        });
    };
});