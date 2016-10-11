(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBoughtController', AlreadyBoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;

  toBuyController.getItems = function () {
    return ShoppingListCheckOffService.getToBuy();
  };

  toBuyController.isListEmpty = function () {
    return toBuyController.getItems().length === 0;
  }

  toBuyController.itemBought = function (idx) {
    ShoppingListCheckOffService.itemBought(idx);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtController = this;

  boughtController.getItems = function () {
    return ShoppingListCheckOffService.getBought();
  };

  boughtController.isListEmpty = function () {
    return boughtController.getItems().length === 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuy = [{ name: "cookies", quantity: 10 }, { name: "cookies", quantity: 20 }, { name: "cookies", quantity: 30 }];
  var bought = [];

  service.getToBuy = function () {
    return toBuy;
  };

  service.getBought = function () {
    return bought;
  };

  service.itemBought = function(idx) {
    bought.push(toBuy[idx]);
    toBuy.splice(idx, 1);
  }
}

})();


