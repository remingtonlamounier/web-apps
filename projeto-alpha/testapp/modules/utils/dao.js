angular.module('starterapp').factory('dao', function($http, URLS, auth) {
    var headers = { Authorization: 'Bearer ' + auth.getUser().token },
        config = { url: URLS.BACKEND, headers: headers },
        db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        projetos = db.createDataSet('projeto'),
        estorias = db.createDataSet('estoria'),
        usuarios = db.createDataSet('usuario');
    
    var httpRequest = function(method, url, callback) {
        $http[method](url, { headers: headers }).then(
            function(res) {
                callback(null, res.data);
            },
            function(res) {
                var message = 'Ocorreu um erro inesperado';

                if (res.data && res.data.error) {
                    message = res.data.error;
                }

                callback(message, null);
            });
    };

    return {
        getDb: function() {
            return db;
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
        
        feed: function(callback) {
            var url = URLS.BACKEND + '/atividade/feed';
            callback(null, []);
            //httpRequest('get', url, callback);
        },
        
        projPendentes: function(callback) {
            var url = URLS.BACKEND + '/projeto/pendentes';
            
            this.getProjetos(function(results) {
                callback(null, results);
            });
            //httpRequest('get', url, callback);
        }
    };
});