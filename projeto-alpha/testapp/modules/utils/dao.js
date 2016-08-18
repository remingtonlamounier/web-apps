angular.module('starterapp').factory('dao', function() {
    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
        projetos = db.createDataSet('projeto'),
<<<<<<< HEAD
        funcionalidades = db.createDataSet('funcionalidade');
        pessoa = db.createDataSet('pessoa');
=======
        projetosDev = db.createDataSet('projeto'),
        atividades = db.createDataSet('atividade'),
        estorias = db.createDataSet('estoria');
>>>>>>> b3fc0e587e88242c897882a376e03b4975707a13

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
        
<<<<<<< HEAD
        getFuncionalidades: function(callback) {
            funcionalidades.open(callback);
            return funcionalidades;
        },

        getPessoa: function(callback) {
            pessoa.open(callback);
            return pessoa;
=======
        getProjetosDev: function(callback) {
            projetosDev.open(callback);
            return projetosDev;
        },
        
        getEstorias: function(callback) {
            estorias.open(callback);
            return estorias;
>>>>>>> b3fc0e587e88242c897882a376e03b4975707a13
        }
    };
});