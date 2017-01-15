(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;

  //TODO: Remove after tests
  $ctrl.user = {
    'firstname': 'Eduardo';
    'lastname': 'Silva';
    'email': 'filosofisto@hotmail.com';
    'menu_number': 'A1';
    'phone': '111-111-1111';
  };

  $ctrl.authenticate = function () {
      /*menu_item = MenuService.getMenuItem('A1');
      console.log("menu_item: ", menu_item);*/
      alert('Authentication !!!');
  };
}
})();
