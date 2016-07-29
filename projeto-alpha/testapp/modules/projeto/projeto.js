angular.module('starterapp').controller('ProjetoCtrl', function($scope, $mdDialog, $mdMedia, auth, dao) {
    $scope.usuario = auth.getUser();
    $scope.projetos = dao.getProjetos(function(results) {
        $scope.projeto = results[0] || {};
    });
    $scope.funcionalidades = dao.getFuncionalidades();
    
    $scope.openForm = function(event) {
        var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
        
        $mdDialog.show({
            controller: 'CadProjetoCtrl',
            templateUrl: './modules/projeto/cadastro.html',
            parent: angular.element(document.body),
            targetEvent: event,
            fullscreen: useFullScreen,
            locals: { projeto: $scope.projeto }
        })
        .then(function(answer) {
            if (answer) {
                $scope.projetos.save(answer);
                $scope.projetos.post();
                $scope.projeto = answer;
            }
        });
    };
    
    $scope.addFunctionality = function(event) {
        console.log(event);
        var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
        
        $mdDialog.show({
            controller: 'FuncionalidadeCtrl',
            templateUrl: './modules/funcionalidade/funcionalidade.html',
            parent: angular.element(document.body),
            targetEvent: event,
            fullscreen: useFullScreen
        })
        .then(function(answer) {
            if (answer) {
                answer.projeto = $scope.projeto.id;
                $scope.funcionalidades.save(answer);
                $scope.funcionalidades.post();
            }
        });
    };
    
    $scope.deleteProject = function(event) {
        $scope.projetos.delete($scope.projeto);
        $scope.projetos.post();
        $scope.projeto = {};
    };
});