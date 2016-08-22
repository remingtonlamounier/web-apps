angular.module('starterapp').factory('dao', function() {
    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        projetos = db.createDataSet('projeto'),
        pessoa = db.createDataSet('pessoa'),
        projetosDev = db.createDataSet('projeto'),
        atividades = db.createDataSet('atividade'),
        estorias = db.createDataSet('estoria');

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
        
        getPessoa: function(callback) {
            pessoa.open(callback);
            return pessoa;
        },
        
        getProjetosDev: function(callback) {
            projetosDev.open(callback);
            return projetosDev;
        },
        
        getEstorias: function(callback) {
            estorias.open(callback);
            return estorias;
        }
    };
});