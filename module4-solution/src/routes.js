(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/menu.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.view.html',
                controller: 'CategoriesController as ctrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories().then(function (response) {
                            return response.data;
                        });
                    }]
                }
            })
            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/templates/items.view.html',
                controller: 'ItemsController as ctrl',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.category).then(function (response) {
                            console.log($stateParams.category);
                            console.log(response.data);
                            return response.data.menu_items;
                        });
                    }]
                }
            });
    }
})();
