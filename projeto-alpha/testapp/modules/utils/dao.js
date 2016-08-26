angular.module('starterapp').factory('dao', function($http, URL, auth) {
    var headers = { Authorization: 'Bearer ' + auth.getUser().token },
        config = { url: URL.BACKEND, headers: headers },
        db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        atividades = db.createDataSet('atividade'),
        projetos = db.createDataSet('projeto'),
        estorias = db.createDataSet('estoria'),
        usuarios = db.createDataSet('usuario');

    return {
        getDb: function() {
            return db;
        },
        
        getAtividades: function(callback) {
            atividades.open(callback);
            return atividades;
        },
        
        getProjetos: function(callback) {
            projetos.open(callback);
            return projetos;
        },
        
        getEstorias: function(callback) {
            estorias.open(callback);
            return estorias;
        },
        
        getUsuarios: function(callback) {
            usuarios.open(callback);
            return usuarios;
        },
        
        projPendentes: function(callback) {
            var url = URL.BACKEND + '/projeto/pendentes';
            
            this.getProjetos(function(results) {
                callback(null, results);
            });
            
//            $http.get(url, { headers: headers }).then(
//                function(res) {
//                    callback(null, res.data);
//                },
//                function(res) {
//                    var message = 'Ocorreu um erro inesperado';
//
//                    if (res.data && res.data.error) {
//                        message = res.data.error;
//                    }
//                    
//                    callback(message, null);
//                }
//            );
        }
    };
});