(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective)
  ;

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;

    controller.searchTerm = '';
    controller.foundItems = [];

    controller.narrowItDownForMe = function() {
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      promise
        .then(function (response) {
          controller.foundItems = response;
        })
        .catch(function (error) {
          console.log("Something wrong!!!", error);
        });
      };

    controller.removeItem = function (index) {
      controller.foundItems.splice(index, 1);
    };

    controller.empty = function () {
      return controller.foundItems.length == 0;
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          console.log('searchTerm: ' + searchTerm);
          console.log('result.data.menu_items.length: ' + result.data.menu_items.length);

          if (searchTerm == '')
            return [];

          var foundItems = [];

          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (result.data.menu_items[i].name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
          console.log("Filtered items length: ", foundItems.length);

          return foundItems;
      });

      return response;
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }
})();
