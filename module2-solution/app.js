(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingService) {
      var controller = this;

      controller.items = ShoppingService.getToBuyItems();

      controller.buy = function (index) {
        ShoppingService.buy(index);
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingService) {
      var controller = this;

      controller.items = ShoppingService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyItems = [
        {name: "Cookies", quantity: 10},
        {name: "Paper", quantity: 10},
        {name: "Toy", quantity: 10},
        {name: "Wallet", quantity: 10},
        {name: "Mouse", quantity: 10}
      ];
      var boughtItems = [];

      service.getToBuyItems = function() {
        return toBuyItems;
      };

      service.getBoughtItems = function () {
        return boughtItems;
      };

      service.buy = function(index) {
        boughtItems.push(toBuyItems[index]);
        toBuyItems.splice(index,1);
      }
    }
})();
