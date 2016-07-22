angular.module('alpha').controller('HomeCtrl',function($scope, dao){
	$scope.projetos = dao.getProjetos();

	var projs = [
		{descricao: "teste1"},
		{descricao: "teste2"},
		{descricao: "teste3"},
		{descricao: "teste4"},
		{descricao: "teste5"},
		{descricao: "teste6"}
	];

	$scope.projetos.insertAll(projs);
});