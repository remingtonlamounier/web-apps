angular.module('starterapp').factory('dialogs',function($mdMedia, $mdDialog) {
    return {
        show: function(controllerName, templateUrl, event, locals) {
            var useFullScreen = $mdMedia('sm') || $mdMedia('xs');

            return $mdDialog.show({
                controller: controllerName,
                templateUrl: templateUrl,
                parent: angular.element(document.body),
                targetEvent: event,
                fullscreen: useFullScreen,
                locals: locals
            });
        }
    };
});