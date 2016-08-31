angular.module('starterapp').controller('DevEstoriaCtrl',function($scope, $stateParams, dao, dialogs){
    $scope.estorias = dao.getEstorias();
    
    dao.projPendentes(function(err, results) {
        var index = results.indexOfKey('id', parseInt($stateParams.id));
        $scope.projeto = results[index];
    });
    
    var save = function(estoria) {
        if (estoria) {
            $scope.estorias.save(estoria);
            $scope.estorias.post();
        }
    };
        
    $scope.addStory = function(event) {
        dialogs.show('CadEstoriaCtrl', './modules/develop/estoria/cadastro.html',
            event, { estoria: {} }).then(save);
    };
    
    $scope.editStory = function(event, item) {
        dialogs.show('CadEstoriaCtrl', './modules/develop/estoria/cadastro.html',
            event, { estoria: item }).then(save);
    };
    
    $scope.delStory = function(event, item) {
        $scope.estorias.delete(item);
        $scope.estorias.post();
    };
});