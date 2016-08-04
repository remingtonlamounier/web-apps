angular.module('starterapp').controller('ProjetoCtrl', function($scope, dao, dialogs) {
    $scope.projetos = dao.getProjetos();
    
    var save = function(projeto) {
        if (projeto) {
            $scope.projetos.save(projeto);
            $scope.projetos.post();
        }
    };
        
    $scope.addProject = function(event) {
        dialogs.show('CadProjetoCtrl', './modules/projeto/cadastro.html',
            event, { projeto: {} }).then(save);
    };
    
    $scope.editProject = function(event, item) {
        dialogs.show('CadProjetoCtrl', './modules/projeto/cadastro.html',
            event, { projeto: item }).then(save);
    };
    
    $scope.delProject = function(event, item) {
        $scope.projetos.delete(item);
        $scope.projetos.post();
    };
});