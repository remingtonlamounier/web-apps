angular.module('starterapp').controller('FuncionalidadeCtrl',function($scope, $mdDialog) {
    $scope.funcionalidade = {};
    
    $scope.cancel = function() {
        $mdDialog.hide();
    };
    
    $scope.save = function() {
        $mdDialog.hide($scope.funcionalidade);
    };
});