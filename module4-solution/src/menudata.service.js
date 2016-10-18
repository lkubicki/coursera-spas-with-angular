(function () {
    'use strict';

    angular.module('data')
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url: (ApiBasePath + "/categories.json")
            })
        };

        service.getItemsForCategory = function (categoryName) {
            return $http({
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryName
                }
            })
        };
    }

})();
