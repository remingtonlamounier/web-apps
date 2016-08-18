angular.module('starterapp').factory('dao', function() {
    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        projetos = db.createDataSet('projeto'),
        funcionalidades = db.createDataSet('funcionalidade');
        pessoa = db.createDataSet('pessoa');

    return {
        getDb: function() {
            return db;
        },
        
        getProjetos: function(callback) {
            projetos.open(callback);
            return projetos;
        },
        
        getFuncionalidades: function(callback) {
            funcionalidades.open(callback);
            return funcionalidades;
        },

        getPessoa: function(callback) {
            pessoa.open(callback);
            return pessoa;
        }
    };
});