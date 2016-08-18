angular.module('starterapp', ['ui.router','ngMaterial'])

.config(function($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'modules/login/login.html'
    });
    
    $stateProvider.state('app', {
        templateUrl: 'modules/main.html',
        controller: 'MainCtrl'
    });
    
    $stateProvider.state('app.home', {
        url: '/home',
        templateUrl: 'modules/home/home.html',
        requireAuth: true
    });
    
    $stateProvider.state('app.projeto', {
        url: '/projeto',
        templateUrl: 'modules/projeto/projeto.html',
        requireAuth: true
    });


     $stateProvider.state('app.treinamento', {
        url: '/treinamento',
        templateUrl: 'modules/treinamento/treinamento.html',
        requireAuth: true
    });
    /* Add New States Above */
    
    $mdIconProvider.defaultFontSet( 'fa' );
    
    $mdThemingProvider.theme('default').primaryPalette('blue');

    $urlRouterProvider.otherwise('/home');
});
