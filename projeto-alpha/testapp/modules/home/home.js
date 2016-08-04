angular.module('starterapp').controller('HomeCtrl', function($scope, auth, dao) {
    $scope.usuario = auth.getUser();
    $scope.projetos = dao.getProjetos();
    $scope.atividades = dao.getAtividades();
    
    $scope.getActivity = function(descricao) {
        return descricao.replace($scope.usuario.nome, 'Você');
    };
    
    $scope.timeElapsed = function(datahora) {
        var now = new Date(),
            ms = (now - datahora),
            secs = ms / 1000,
            days = secs >= 86400 ? secs / 86400 : 0,
            x;
        
        if (days >= 365) {
            x = Math.floor(days / 365);
            return x + ' ano(s) atrás';
        }
        
        if (days >= 30) {
            x = Math.floor(days / 30);
            return x + ' mês(es) atrás';
        }
        
        if (days >= 1) {
            x = Math.floor(days);
            return x + ' dia(s) atrás';
        }
        
        if (secs >= 3600) {
            x = Math.floor(secs / 3600);
            return x + ' hora(s) atrás';
        }
        
        if (secs >= 60) {
            x = Math.floor(secs / 60);
            return x + ' minuto(s) atrás';
        }
        
        if (secs >= 1) {
            x = Math.floor(secs);
            return x + ' segundo(s) atrás';
        }
        
        return ms + ' milisegundos atrás';
    };
});