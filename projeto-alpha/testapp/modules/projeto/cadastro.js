angular.module('starterapp').controller('CadProjetoCtrl', function($scope, $mdDialog, projeto) {
    $scope.projeto = projeto;
    
    $scope.cancel = function() {
        $mdDialog.hide();
    };
    
    $scope.save = function() {
        $mdDialog.hide($scope.projeto);
    };
});