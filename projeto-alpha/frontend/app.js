angular.module('alpha', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('alpha').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'app/home/page.html'});
    $routeProvider.when('/funcionalidade',{templateUrl: 'app/funcionalidade/page.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('alpha').run(function($rootScope) {

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

});
