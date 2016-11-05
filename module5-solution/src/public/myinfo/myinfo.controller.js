(function () {

    angular.module('public')
        .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['myinfoService'];
    function myInfoController(myinfoService) {
        var myInfoCtrl = this;
        myInfoCtrl.myinfoSrvc = myinfoService;
        myInfoCtrl.userInfo;

        myInfoCtrl.getRegisteredUser = function () {
            if (!myInfoCtrl.userInfo) {
                myInfoCtrl.userInfo = myInfoCtrl.myinfoSrvc.getUserInfo();
            }
            return myInfoCtrl.userInfo;
        };
    }
})();
