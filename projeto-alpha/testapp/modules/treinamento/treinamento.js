angular.module('starterapp').controller('TreinamentoCtrl',function($scope, auth, dao){
    $scope.pessoa = dao.getPessoa();

    $scope.addPessoa = function(event) {
        console.log($scope.pessoa);
    };
});