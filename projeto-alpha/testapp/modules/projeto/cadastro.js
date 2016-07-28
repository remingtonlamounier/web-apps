angular.module('starterapp').controller('CadProjetoCtrl', function($scope, $mdDialog) {
    $scope.cancel = function() {
        $mdDialog.hide();
    };
    
    $scope.save = function() {
        $mdDialog.hide($scope.projeto);
    };
});