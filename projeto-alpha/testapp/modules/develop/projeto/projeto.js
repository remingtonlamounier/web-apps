angular.module('starterapp').controller('DevProjetoCtrl',function($scope, dao){
    $scope.projetos = dao.getProjetosDev();
});