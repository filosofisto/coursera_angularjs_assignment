(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService', 'MenuService'];
  function SignupController(UserService, MenuService) {
    var $ctrl = this;
    $ctrl.registrationSuccess = false;
    $ctrl.favoriteDishFound = false;

    $ctrl.authenticate = function(event) {
      event.preventDefault();
      var user = {
            firstname: $ctrl.firstname,
            lastname: $ctrl.lastname,
            email: $ctrl.email,
            phone: $ctrl.phone,
            favoriteDish: $ctrl.favoriteDish
      };

      MenuService.getMenuItems($ctrl.favoriteDish)
        .then(function(data) {
          user.favoriteMenuItem = data;

          UserService.setUser(user);
          $ctrl.favoriteDishFound = true;
          $ctrl.registrationSuccess = true;
        }, function(err) {
          UserService.setUser(user);
          $ctrl.favoriteDishFound = false;
          $ctrl.registrationSuccess = true;
        });
    };
  }
})();
