(function () {

    angular.module('public')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['MenuService', 'myinfoService'];
    function signUpController(MenuService, myinfoService) {
        var dishExists = true;
        var signUpCtrl = this;
        signUpCtrl.menuService = MenuService;
        signUpCtrl.myinfoSrvc = myinfoService;

        signUpCtrl.submit = function () {
            signUpCtrl.myinfoSrvc.setUserInfo(signUpCtrl.user.firstName, signUpCtrl.user.lastName, signUpCtrl.user.email, signUpCtrl.user.phone, signUpCtrl.user.favoriteDish);
            if (signUpCtrl.dishExists()) {
                signUpCtrl.completed = true;
            }
        };

        signUpCtrl.dishExists = function () {
            console.log("jest");
            return signUpCtrl.menuService().checkCategory(signUpCtrl.user.favoriteDish).then(function () {
                signUpCtrl.dishExists = true;
                return true;
            }, function () {
                signUpCtrl.dishExists = false;
                return false;
            });
        };
    }
})();
