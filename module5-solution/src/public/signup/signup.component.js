(function () {
    "use strict";

    angular.module('public')
        .component('signUp', {
            controller : "signUpController",
            controllerAs : "ctrl",
            templateUrl: 'src/public/signup/signup.template.html'
        });
})();
