angular.module('starterapp').factory('dao', function() {
    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        atividades = db.createDataSet('atividade'),
        projetos = db.createDataSet('projeto'),
        projetosDev = db.createDataSet('projeto'),
        estorias = db.createDataSet('estoria'),
        pessoa = db.createDataSet('pessoa'),
        desenvolvedores = db.createDataSet('usuario');

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
        
        getProjetosDev: function(callback) {
            projetosDev.open(callback);
            return projetosDev;
        },
        
        getEstorias: function(callback) {
            estorias.open(callback);
            return estorias;
        },
        
        getPessoa: function(callback) {
            pessoa.open(callback);
            return pessoa;
        },
        
        getDesenvolvedores: function(callback) {
            desenvolvedores.params = { grupo: 'develop' };
            desenvolvedores.open(callback);
            return desenvolvedores;
        }
    };
});