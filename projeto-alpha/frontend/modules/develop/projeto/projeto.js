angular.module('starterapp').controller('DevProjetoCtrl', function($scope, dao) {
    dao.projPendentes(function(err, results) {
        $scope.projetos = results;
    });
});