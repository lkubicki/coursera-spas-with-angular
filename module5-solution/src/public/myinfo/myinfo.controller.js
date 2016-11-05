(function () {

    angular.module('public')
        .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['myinfoService'];
    function myInfoController(myinfoService) {
        var dishExists = true;
        var myInfoCtrl = this;
        myInfoCtrl.myinfoSrvc = myinfoService;

        myInfoCtrl.getRegisteredUser = function () {
            return myInfoCtrl.myinfoSrvc.getUserInfo();
        };
    }
})();
