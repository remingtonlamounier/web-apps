angular.module('starterapp').factory('dao', function() {
    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
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
        }
    };
});