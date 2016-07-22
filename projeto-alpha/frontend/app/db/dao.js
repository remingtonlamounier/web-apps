angular.module('alpha').factory('dao',function() {

    var db = new DbFactory(DbProxies.LOCALSTORAGE, 'alpha'),
    	projetos = db.createDataSet('projetos'),
    	funcionalidades = db.createDataSet('funcionalidades');

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
    	}
    };
});