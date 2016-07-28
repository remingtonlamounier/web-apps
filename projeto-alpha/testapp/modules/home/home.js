angular.module('starterapp').controller('HomeCtrl',function($scope, auth){
    $scope.usuario = auth.getUser();
});