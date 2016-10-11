(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowController = this;
        var found = [];
        var searchTerm;

        narrowController.getMatchedMenuItems = function(searchTerm) {
            narrowController.found = [];
            if(searchTerm != undefined && searchTerm != null) {
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                promise.then(function(response) {
                    var received = response.data.menu_items;
                    var foundItems = [];
                    for(var i = 0; i < received.length; i++) {
                        if(received[i].description.indexOf(searchTerm) != -1) {
                            foundItems.push(received[i]);
                        }
                    }
                    narrowController.found = foundItems;
                    
                })
            }
        }

        narrowController.removeItem = function(idx) {
            narrowController.found.splice(idx, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                url: (ApiBasePath + "/menu_items.json")
            });
        }
    }

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'ctrl',
            bindToController: true
        }
        return ddo;
    }

})();
