(function () {
    'use strict';

    angular.module('data', [])
        .controller('data', data);

    data.$inject = ['MenuDataService'];
    function data(MenuDataService) {
        var data = this;
    }
})();
