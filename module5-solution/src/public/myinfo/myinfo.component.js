(function () {
    "use strict";

    angular.module('public')
        .component('myInfo', {
            controller : "myInfoController",
            controllerAs : "ctrl",
            templateUrl: 'src/public/myinfo/myinfo.template.html'
        });
})();
