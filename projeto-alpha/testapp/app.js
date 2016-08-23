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
        roles: ['user','develop','admin']
    });
    
    $stateProvider.state('app.projeto', {
        url: '/projetos',
        templateProvider: ['$templateFactory', 'auth', function($templateFactory, auth) {
            var isDeveloper = auth.getUser().grupo === 'develop' || auth.getUser().grupo === 'admin',
                url = isDeveloper ? 'modules/develop/projeto/projeto.html' : 'modules/projeto/projeto.html';
            return $templateFactory.fromUrl(url);
        }],
        roles: ['user','develop','admin']
    });

    $stateProvider.state('app.estoria', {
        url: '/projeto/:id',
        templateUrl: 'modules/develop/estoria/estoria.html',
        roles: ['develop','admin']
    });
    
    $stateProvider.state('app.treinamento', {
        url: '/treinamento',
        templateUrl: 'modules/treinamento/treinamento.html',
        roles: ['develop','admin']
    });
    
    $stateProvider.state('app.desenvolvedor', {
        url: '/desenvolvedores',
        templateUrl: 'modules/admin/desenvolvedor/desenvolvedor.html',
        roles: ['admin']
    });
    
    /* Add New States Above */
    
    $mdIconProvider.defaultFontSet( 'fa' );
    
    $mdThemingProvider.theme('default').primaryPalette('blue');

    $urlRouterProvider.otherwise('/home');
})

.run(function($rootScope, $state, auth) {
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        var role = auth.getUser().grupo;
        
        if (toState.roles && toState.roles.indexOf(role) === -1) {
            $state.transitionTo('login');
            event.preventDefault();
        }
    });
});