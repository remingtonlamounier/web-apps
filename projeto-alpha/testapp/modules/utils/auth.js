angular.module('starterapp').factory('auth', function($http) {
    var baseUrl = 'http://localhost:1337',
        auth = {
            authorize: function(user, callback) {
                var url = baseUrl + '/login';
                
                if (this.isAuthorized()) {
                    return callback();
                }

                $http.post(url, JSON.stringify(user)).then(function(res) {
                    delete user.senha;
                    user.token = res.data.token;
                    user.fone = res.data.usuario.telefone;
                    
                    localStorage.setItem('user', JSON.stringify(user));
                    
                    callback();
                }, function(res) {
                    var message = 'Ocorreu um erro inesperado';

                    if (res.status === 404) {
                        message = 'E-mail e/ou senha inválidos';
                    } else if (res.data && res.data.error) {
                        message = res.data.error;
                    }
                    
                    callback(message);
                });
            },
            
            getUser: function() {
                var obj = localStorage.getItem('user') || '{}';
                return JSON.parse(obj);
            },
            
            isAuthorized: function() {
                return this.getUser().token ? true : false;
            }
        };

    return auth;
});