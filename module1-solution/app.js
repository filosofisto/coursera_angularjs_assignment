(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      if ($scope.lunch == "") {
        $scope.message = "Please enter data first";
        return;
      }

      var array = $scope.lunch.split(',');
      var size = $scope.realNoEmptyItems(array);

      if (size <= 3) {
        $scope.message = "Enjoy";
      } else {
        $scope.message = "Too Much!";
      }
    };

    $scope.realNoEmptyItems = function(array) {
      var qtd = 0;

      for (var i = 0; i < array.length; i++) {
          if (array[i].trim().length > 0) {
            qtd++;
          }
      }

      return qtd;
    }
  }
})();
