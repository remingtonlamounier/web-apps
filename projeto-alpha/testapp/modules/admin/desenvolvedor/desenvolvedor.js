angular.module('starterapp').controller('DesenvolvedorCtrl', function($scope, dao){
    $scope.desenvolvedores = dao.getDesenvolvedores();
});