(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var $ctrl = this;
    $ctrl.signedUp = false;
    $ctrl.favoriteMenuItem;

    if(user) {
      $ctrl.signedUp = true;
      $ctrl.firstname = user.firstname;
      $ctrl.lastname = user.lastname;
      $ctrl.email = user.email;
      $ctrl.phone = user.phone;
      $ctrl.favoriteDish = user.favoriteDish;
      $ctrl.favoriteMenuItem = user.favoriteMenuItem;
    }
    else {
      $ctrl.signedUp = false;
    }
  }

})();
