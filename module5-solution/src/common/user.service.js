(function() {
  "use strict";

  angular.module("common")
    .service("UserService", UserService);

  function UserService() {
    var service = this;
    var user;

    service.setUser = function(newUser) {
      user = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        phone: newUser.phone,
        favoriteDish: newUser.favoriteDish,
        favoriteMenuItem: newUser.favoriteMenuItem
      };
    };

    service.getUser = function() {
      return user;
    }
  }
})();
