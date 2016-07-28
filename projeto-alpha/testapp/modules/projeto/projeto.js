angular.module('starterapp').controller('ProjetoCtrl', function($scope, $mdDialog, $mdMedia) {
    $scope.projeto = {};
    
    $scope.show = function(event) {
        var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
        
        $mdDialog.show({
            controller: 'CadProjetoCtrl',
            templateUrl: './modules/projeto/cadastro.html',
            parent: angular.element(document.body),
            targetEvent: event,
            fullscreen: useFullScreen,
            locals: $scope.projeto,
            bindToController: true
        })
        .then(function(answer) {
            console.log(answer);
        });
    }
});