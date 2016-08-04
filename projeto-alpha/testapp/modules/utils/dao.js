angular.module('starterapp').factory('dao', function() {
    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        projetos = db.createDataSet('projeto'),
        atividades = db.createDataSet('atividade');

    return {
        getDb: function() {
            return db;
        },
        
        getProjetos: function(callback) {
            projetos.open(callback);
            return projetos;
        },
        
        getAtividades: function(callback) {
            atividades.open(callback);
            return atividades;
        }
    };
});