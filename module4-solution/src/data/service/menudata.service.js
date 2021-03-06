(function() {
  'use strict';

  angular.module('data')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: ApiBasePath + "categories.json"
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: ApiBasePath + "menu_items.json",
        params: {
          'category': categoryShortName
        }
      });
    };
  }
})();
