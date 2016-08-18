angular.module('starterapp', ['ui.router', 'ngMaterial'])

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
        url: '/projetos',
        templateProvider: ['$templateFactory', 'auth', function($templateFactory, auth) {
            var isDeveloper = auth.getUser().grupo === 'develop' || auth.getUser().grupo === 'admin',
                url = isDeveloper ? 'modules/develop/projeto/projeto.html' : 'modules/projeto/projeto.html';
            return $templateFactory.fromUrl(url);
        }],
        requireAuth: true
    });
<<<<<<< HEAD


     $stateProvider.state('app.treinamento', {
        url: '/treinamento',
        templateUrl: 'modules/treinamento/treinamento.html',
        requireAuth: true
    });
=======
    
    $stateProvider.state('app.estoria', {
        url: '/projeto/:id',
        templateUrl: 'modules/develop/estoria/estoria.html',
        requireAuth: true
    });    
    
>>>>>>> b3fc0e587e88242c897882a376e03b4975707a13
    /* Add New States Above */
    
    $mdIconProvider.defaultFontSet( 'fa' );
    
    $mdThemingProvider.theme('default').primaryPalette('blue');

    $urlRouterProvider.otherwise('/home');
});
