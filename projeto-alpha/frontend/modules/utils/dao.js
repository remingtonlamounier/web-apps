angular.module('starterapp').factory('dao', function($http, URLS, auth) {
    var header = { Authorization: 'Bearer ' + auth.getUser().token },
        config = { url: URLS.BACKEND, headers: header },
//        db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        db = new DbFactory(DbProxies.RESTFUL, config),
        projetos = db.createDataSet('projeto'),
        estorias = db.createDataSet('estoria'),
        usuarios = db.createDataSet('usuario');
    
    var preflight = function(err, data, callback) {
        if (err && [401,403].indexOf(err.code) > -1) {
            auth.clear();
        }
        if (callback && typeof callback === 'function') {
            callback(err, data);
        }
    };
    
    var httpRequest = function(method, url, callback) {
        $http[method](url, { headers: header }).then(
            function(res) {
                var results = new ArrayMap();
                results.putRange(res.data);
                callback(null, results);
            },
            function(res) {
                var message = 'Ocorreu um erro inesperado';

                if (res.data && res.data.error) {
                    message = res.data.error;
                }

                callback(message, []);
            });
    };
    
    return {
        getDb: function() {
            return db;
        },
                
        getProjetos: function(callback) {
            projetos.open(function(err, data) {
                preflight(err, data, callback);
            });
            return projetos;
        },
        
        getEstorias: function(callback) {
            estorias.open(function(err, data) {
                preflight(err, data, callback);
            });
            return estorias;
        },
        
        getUsuarios: function(callback) {
            usuarios.open(function(err, data) {
                preflight(err, data, callback);
            });
            return usuarios;
        },
        
        feed: function(callback) {
            var url = URLS.BACKEND + '/atividade/feed';
            httpRequest('get', url, callback);
            
            // Mock backend
//            callback(null, new ArrayMap());
        },
        
        projPendentes: function(callback) {
            var url = URLS.BACKEND + '/projeto/pending';
            httpRequest('get', url, callback);

            // Mock backend
//            this.getProjetos(function(results) {
//                callback(null, results);
//            });
        }
    };
});