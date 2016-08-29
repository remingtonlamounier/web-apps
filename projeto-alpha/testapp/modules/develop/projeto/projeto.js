angular.module('starterapp').controller('DevProjetoCtrl', function($scope, dao) {
    dao.projPendentes(function(err, results) {
        $scope.projetos = results;
    });
    
    $scope.charsAt = function(text, len) {
        return text.length < len ? text : text.substring(0, len) + '...';
    };
});