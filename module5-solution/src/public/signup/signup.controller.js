(function () {

    angular.module('public')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['MenuService', '$q'];
    function signUpController(MenuService, $q) {
        var signUpCtrl = this;
        signUpCtrl.menuService = MenuService;

        signUpCtrl.submit = function () {
            signUpCtrl.completed = true;
        };

        signUpCtrl.dishExists = function () {
            console.log("jest");
            return signUpCtrl.menuService().checkCategory(signUpCtrl.user.favouriteDish).then(function () {
                return true;
            }, function () {
                return false;
            });
        };
    }
})();
