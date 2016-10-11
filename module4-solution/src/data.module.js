(function () {
    'use strict';

    angular.module('MenuApp', [])
        .controller('data', data);

    data.$inject = ['MenuDataService'];
    function data(MenuDataService) {
        var data = this;
    }
})();
