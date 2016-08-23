angular.module('starterapp').controller('DevProjetoCtrl',function($scope, dao){
    $scope.projetos = dao.getProjetosDev();
    
    $scope.charsAt = function(text, len) {
        return text.length < len ? text : text.substring(0, len) + '...';
    };
});