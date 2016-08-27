angular.module('starterapp', ['ui.router', 'ngMaterial'])

.constant('URLS', {
    'BACKEND': 'http://localhost:1337'
})

.config(function($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {
    $stateProvider.state('criar', {
        url: '/criar',
        templateUrl: 'modules/login/criar.html'
    });

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
        roles: ['users','develops','admins']
    });
    
    $stateProvider.state('app.projeto', {
        url: '/projetos',
        templateProvider: ['$templateFactory', 'auth', function($templateFactory, auth) {
            var isDeveloper = auth.getUser().grupo === 'develops' || auth.getUser().grupo === 'admins',
                url = isDeveloper ? 'modules/develop/projeto/projeto.html' : 'modules/projeto/projeto.html';
            return $templateFactory.fromUrl(url);
        }],
        roles: ['users','develops','admins']
    });

    $stateProvider.state('app.estoria', {
        url: '/projeto/:id',
        templateUrl: 'modules/develop/estoria/estoria.html',
        roles: ['develops','admins']
    });
    
    $stateProvider.state('app.usuario', {
        url: '/usuarios',
        templateUrl: 'modules/admin/usuario/usuario.html',
        roles: ['admins']
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