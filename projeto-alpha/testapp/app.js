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
    /* Add New States Above */
    
    $mdIconProvider.defaultFontSet( 'fa' );
    
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');

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
        if (toState.requireAuth && !auth.isAuthorized()) {
            $state.transitionTo('login');
            event.preventDefault();
        }
    });
});
